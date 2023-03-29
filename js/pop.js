var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function showFullImg(pic) {
  fullImgBox.classList.add("active");
  fullImg.src = pic;
}

function closeFullBox() {
  fullImgBox.classList.remove("active");
}
