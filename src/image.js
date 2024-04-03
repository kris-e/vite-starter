export function getImage() {
  const canvas = document.getElementById("preview-img");
  const context = canvas.getContext("2d");
  const input = document.getElementById("get-image");
  const image = new Image();

  // Clear any previous image
  context.clearRect(0, 0, canvas.width, canvas.height);

    input.onchange = function() {
      // const image = new Image();
      image.onload = function() {
        const context = canvas.getContext("2d");
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this, 0, 0);
      }
      image.src = URL.createObjectURL(this.files[0])
    }
  image.onload = drawImg;
  return image;
}

export function drawImg(image, canvas) {
  // const canvas = document.getElementById("meme");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  // context.putImageData(image, 0, 0);

  context.drawImage(
    image, 
    0, 
    0, 
    image.imageWidth, 
    image.imageHeight
    );
}