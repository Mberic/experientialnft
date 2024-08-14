FROM node:14-bullseye

# Install dependencies for canvas, TensorFlow, and FFmpeg
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    librsvg2-dev \
    ffmpeg \
    python3 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copy the source code
COPY ./src /app

# Set the entry point for the application
ENTRYPOINT [ "node", "/app/app.js" ]
