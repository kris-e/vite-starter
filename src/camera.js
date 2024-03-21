export async function getVideo() {
  const video = document.createElement("video");
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  try {
    video.srcObject = avStream;
  } catch (error) {
    // old brwosers
    video.src = window.URL.createObjectURL(avStream);
  }
  await video.play();
  return video;
}

export function drawVideo(video, canvas) {
  // console.log("draw");
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
