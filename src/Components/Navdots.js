import React, { useRef, useState } from "react";
import GIF from "gif.js";

const VideoToGif = () => {
  const videoRef = useRef(null);
  const [gifUrl, setGifUrl] = useState(null); // store gif preview

  const handleGenerateGif = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    video.addEventListener("loadeddata", () => {
      canvas.width = video.videoWidth / 2;
      canvas.height = video.videoHeight / 2;

      const gif = new GIF({
        workers: 2,
        quality: 10,
        workerScript: "/node_modules/gif.js/dist/gif.worker.js",
      });

      let frameCount = 0;
      const captureFrame = () => {
        if (frameCount > 30) {
          gif.render();
          return;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        gif.addFrame(ctx, { copy: true, delay: 100 });
        frameCount++;
        requestAnimationFrame(captureFrame);
      };

      video.currentTime = 0;
      video.play();
      captureFrame();

      gif.on("finished", (blob) => {
        const url = URL.createObjectURL(blob);
        setGifUrl(url); // show gif instead of video
      });
    });
  };

  return (
    <div>
      {/* If gif is ready show it, else show video */}
      {gifUrl ? (
        <img src={gifUrl} alt="Generated GIF" width="400" />
      ) : (
        <video ref={videoRef} src="/leo.mp4" controls width="400" />
      )}

      <br />
     
    </div>
  );
};

export default VideoToGif;
