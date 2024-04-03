// import { drawPreview } from "./camera";

export function getImage(e, previewImg) {
  const image = document.createElement("img");

  if(previewImg) {
    document.getElementById("get-image").addEventListener("click", () => {
      image.src = e.target.files[0];
      image.src = URL.createObjectURL(e.target.files[0]);
      drawImgPreview(image, previewImg)
    });
    return image;
  }
 
}

export function drawImg(image, canvas) {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = image.imageWidth;
  canvas.height = image.imageHeight;
  context.drawImg(image, 0, 0, image.imageWidth, image.imageHeight);
}

export function drawImgPreview(image, canvas) {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  setInterval(() => {
    context.drawImg (
      image,
      0,
      0,
      image.imageWidth, 
      image.imageHeight,
      canvas.width,
      canvas.height,
    );
  }, 1);
}
