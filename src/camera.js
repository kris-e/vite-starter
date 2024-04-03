export async function getVideo(previewCanvas) {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.createElement("video");
  try {
    video.srcObject = avStream;
  } catch (error) {
    // old browsers
    video.src = window.URL.createObjectURL(avStream);
  }

  if(previewCanvas) {
    video.addEventListener("canplay", () => {
      drawPreview(video, previewCanvas);
    });
  }

  await video.play();
  return video;
}

export function drawVideo(video, canvas) {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}

export function drawPreview(video, canvas) {
  const context = canvas.getContext("2d");
  setInterval(() => {
    context.drawImage (
      video,
      0,
      0,
      video.videoWidth,
      video.videoHeight,
      0,
      0,
      canvas.width,
      canvas.height,
    );
  }, 16);
}
