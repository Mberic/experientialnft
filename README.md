# Signature \- Experiential NFTs

This project uses video to create NFTs for users. It uses Pose estimation to detect human poses in the uploaded video. These poses can then be used to animate an SVG avatar. 

The aim of this **signature** approach to NFT generation is to create NFTs from “lived experiences”. We choose to call these experiential NFTs. 

## Benefits 

Let's explore the benefits of this **signature** approach:

* Store moments on blockchain \- remember them as playful memories (using animations). Think danse videos, joyful moments, etc.   
* Our NFT objects have a legitimate claim from where they derive their value (unlike most of the stuff on the market now).   
    
  If you know that animation is using poses based on a recording of Vitalik, then you'll definitely be interested. Additionally, we now have AI and it can do lots of things. Wouldn't it be nice to know that the animation of the NFT you're buying was generated from real human poses?

## How it Works 

1. A user uploads a video to the DApp frontend. This video is converted to `base64` text file and then sent to the Celestia network. Some other info is sent:   
     
* the `svg` avatar (or IPFS link for the avatar) that will be used create an animation  
* the `chain` on which to mint. Initially, users will be able to mint on Ethereum only   
* `address` to mint to  
    
2. The DApp backend listens for data on the configured Celestia `namespace` and `network`. The app processes this video to detect human poses. If human poses are detected with \>0.6 accuracy, then we can continue execution.   
     
3. The pose objects are stored and then an NFT is minted on the chain the user chose.  
     
4. At the frontend, a user queries the detected `poses` plus SVG avatar and uses these to generate an animation ( **gif** or **video** ) . They can then list (or show off\!)  this animation on an NFT marketplace

## Tools

Frontend 

* React  
* Thirdweb React SDK (to provide wallet functionality)  
* Paper.js. To animate SVG using poses

Backend (Node JS)

- Lambada framework   
- `posenet` and `facemesh` libraries to detect poses   
- `ffmpeg` library to detect video frames 

## Limitations 

Let's look at some practical considerations:

- Video files must be a max of 1MB (size limitations because of Celestia \~ 1.8 Mb)  
- Pose detection for 1 person ( multiple pose detection to be supported later )  
- Supported ( tested ) file formats are `.mp4` , `.webm`

## Tokenomics 

* Permissioned validator set  
* Reward distribution follows a fixed percentage for each validator   
* DApp fees are paid in TIA (support for other tokens later ). Payments are made to a multisig wallet owned by the validator set. The user must send the video & DApp fees using the same Celestia address \[ These are 2 separate transactions \]


Note : there's no constraint about both transactions being in the same block. Whenever tokens are sent to the multisig wallet, the validators check for a match with unminted NFTs

## Use cases

* Famous individuals can create NFT poses and list them. Users can then buy them and choose an SVG avatar for these poses. This allows for personalization on the side of buyers  
* Prize giving ceremony. Each hackathon winner can have a NFT animation from a congratulatory video captured by the prize giver  
* Ordinary individuals can also generate NFTs from captivating moments of their life 

## Future developments 

To be done after initial product launch:

* Pose estimation for non-human motion e.g. for dogs and cats  
* Fractionalization. Given that our videos generate an array of pose objects, we can have each “pose moment” (video frame) as an NFT   
* Finance inclusion. Allow for usage of other tokens

## References 

1. [Pose estimation](https://www.tensorflow.org/lite/examples/pose\_estimation/overview\#:\~:text=Pose%20estimation%20is%20the%20task,key%20body%20joints%20(keypoints).)  
2. [Pose Animator by Shan Huang](https://github.com/yemount/pose-animator)  
3. [Cartesi Lambada](https://github.com/zippiehq/cartesi-lambada/tree/main)   
4. [Dog Pose estimation](https://github.com/ryanloney/dog-pose-estimation)
