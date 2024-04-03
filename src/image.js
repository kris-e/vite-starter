export function getImage() {
  const canvas = document.getElementById("meme");
  const context = canvas.getContext("2d");
  const input = document.getElementById("get-image");
  const image = new Image();

  // Clear any previous image
  context.clearRect(0, 0, canvas.width, canvas.height);

    input.onchange = function() {
      image.onload = function() {
        const context = canvas.getContext("2d");
        // canvas.width = this.width;
        // canvas.height = this.height;
        context.drawImage(this, 0, 0, canvas.width, canvas.height);
      }
      image.src = URL.createObjectURL(this.files[0])
    }
  return image;
}