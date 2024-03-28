export function getImage(canvas) {
  const context = canvas.getContext("2d");

  const upload = document.getElementById("get-image");

  // Clear any previous text
  // context.clearRect(0, 0, canvas.width, canvas.height);

  function readImg() {
    const fileRead = new FileReader();

    fileRead.addEventListener("load", (e) =>{
      const image = new Image();
      image.addEventListener("load", () => {
        // Clear any previous image
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      })
      image.src = e.target.result
    });
    fileRead.readAsDataURL(this.files[0]);
  }
  upload.addEventListener("change", readImg);

}

// export function drawImg(image, canvas) {
//   const context = canvas.getContext("2d");
//   canvas.width = image.imageWidth;
//   canvas.height = image.imageHeight;
//   context.drawImage(image, 0, 0, image.videoWidth, image.videoHeight);
// }
