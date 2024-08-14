# How to Run

Build docker image:

```sh
docker build -t my-app .
```
Then run:

```sh
docker run --rm     -v /tmp/iexec_in:/iexec_in     -v /tmp/iexec_out:/iexec_out     -e IEXEC_IN=/iexec_in     -e IEXEC_OUT=/iexec_out     my-app /iexec_in/video_base64.txt
```

Ensure that you have a base64 video file (`video_base64.txt`) in `/tmp/iexec_in/`. Check the `sample` folder of this repo.

After successful execution, you should see `poses.txt` in `/tmp/iexec_out/`:

Output after execution:

```sh
2024-08-14 10:30:28.836822: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized with oneAPI Deep Neural Network Library (oneDNN) to use the following CPU instructions in performance-critical operations:  AVX2 FMA
To enable them in other operations, rebuild TensorFlow with the appropriate compiler flags.
Pose data saved to /iexec_out/poses.txt
```