# Signature \- Experiential NFTs

This project uses video to create NFTs for users. It uses Pose estimation to detect human poses in the uploaded video. These poses can then be used to animate an SVG avatar. 

The aim of this **signature** approach to NFT generation is to create NFTs from “lived experiences”. We choose to call these experiential NFTs. 

## Benefits 

Let's explore the benefits of this **signature** approach:

* Store moments on blockchain \- remember them as playful memories (using animations). Think danse videos, joyful moments, etc.   
* Our NFT objects have a legitimate claim from where they derive their value (unlike most of the stuff on the market now).   
    
  If you know that an animation is using poses based on a recording of Vitalik, then you'll definitely be interested. Additionally, we now have A.I. and it can do lots of things. Wouldn't it be nice to know that the animation of the NFT you're buying was generated from real human poses?

## How it Works 

1. A user uploads a video to the DApp frontend. This video is converted to `base64` text file and then to the ap. Some other info is sent:  

- IPFS link for the `svg` avatar that will be used create an animation (can also be provided later - See **Use cases**) 
    
2. The DApp backend receives the `base64` file and processes the video to detect human poses. If human poses are detected with \>0.65 accuracy, then we can store the pose objects (IPFS).   
     
3. After successful execution (detection of human poses), the user can now mint their experiential NFT. We'll need an IPFS link that points to the IPFS links for the `poses` and `svg` for the animation
     
4. At the frontend, a user queries the detected `poses` plus SVG avatar and uses these to generate an animation ( **gif** or **video** ) . They can then list (or show off\!)  this animation on an NFT marketplace

## Demo

It may be difficult to visualize what we are trying to do here. So [here's a web2 ML experiment](https://www.scroobly.com/) that does something similar. The difference is that it uses live video feed.

## Tools

Frontend 

* React  
* Thirdweb React SDK (to provide wallet functionality)  
* Paper.js. To animate SVG using poses

Backend (Node JS)

- Docker 
- `posenet` and `facemesh` libraries to detect poses from video frames
- `ffmpeg` library to detect video frames 

## Limitations 

Let's look at some practical considerations:

- Video files must be a max of 10 MB (This is an arbitary limit based on some tests I've done)  
- Pose detection for 1 person ( multiple pose detection to be supported later )  
- Supported ( tested ) file formats are `.mp4` , `.webm`

## Tokenomics (Monetization)

- Dapp fees for video processing
- Dapp fees for minting Experiential NFTs

## Use cases

* Famous individuals can create NFT poses and list them. Users can then buy them and choose an SVG avatar for these poses. This allows for personalization on the side of buyers  
* Prize giving ceremony. Each hackathon winner can have a NFT animation from a congratulatory video captured by the prize giver  
* Ordinary individuals can also generate NFTs from captivating moments of their life 

## Future developments 

To be done after initial product launch:

* Pose estimation for non-human motion e.g. for dogs and cats  
* Fractionalization. Given that our videos generate an array of pose objects, we can have each “pose moment” (video frame) as an NFT   

## References 

1. [Pose estimation](https://www.tensorflow.org/lite/examples/pose\_estimation/overview\#:\~:text=Pose%20estimation%20is%20the%20task,key%20body%20joints%20(keypoints).)  
2. [Pose Animator by Shan Huang](https://github.com/yemount/pose-animator)  
3. [Dog Pose estimation](https://github.com/ryanloney/dog-pose-estimation)
