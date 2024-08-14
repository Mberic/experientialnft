import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync } from 'fs';
import { extname, join } from 'path';
import ffmpeg from 'fluent-ffmpeg';
import { createCanvas, loadImage } from 'canvas';
import { node } from '@tensorflow/tfjs-node';
import { load } from '@tensorflow-models/posenet';

async function processVideo(base64FilePath, outputDir, outputFilePath) {
  // Read base64 data from file
  const base64Data = readFileSync(base64FilePath, 'utf-8');

  // Decode base64 video data and save it as a file
  const videoBuffer = Buffer.from(base64Data, 'base64');
  const inputVideoPath = join(outputDir, 'input_video.mp4');

  // Create the output directory for frames if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  // Save the decoded video buffer as a file
  writeFileSync(inputVideoPath, videoBuffer);

  // Validate the video file
  if (!existsSync(inputVideoPath) || videoBuffer.length === 0) {
    throw new Error('The video file is not valid or is empty.');
  }

  // Load PoseNet model
  const net = await load();

  // Extract frames from the video
  await new Promise((resolve, reject) => {
    ffmpeg(inputVideoPath)
      .on('end', resolve)
      .on('error', reject)
      .screenshots({
        count: 10, // Number of frames to extract
        folder: outputDir,
        size: '640x?'
      });
  });

  // Process each frame and get Pose data
  const files = readdirSync(outputDir);
  const poses = [];

  for (const file of files) {
    if (extname(file) === '.png') {
      const imgPath = join(outputDir, file);
      const image = await loadImage(imgPath);
      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);

      // Convert canvas to Tensor
      const input = node.decodeImage(canvas.toBuffer(), 3);
      const pose = await net.estimateSinglePose(input, { flipHorizontal: false });

      // Save pose data
      poses.push({ frame: file, pose });
    }
  }

  // Clean up extracted frames directory
  rmSync(outputDir, { recursive: true, force: true });

  // Write pose data to file
  writeFileSync(outputFilePath, JSON.stringify(poses, null, 2));
  console.log(`Pose data saved to ${outputFilePath}`);
}

// Usage example
(async () => {
  const base64FilePath = './video_base64.txt';
  const outputDir = './frames'; // Use a dedicated directory for frames
  const outputFilePath = 'poses.txt';
  await processVideo(base64FilePath, outputDir, outputFilePath);
})();
