const fullImgBox = document.querySelector("#fullImgBox");
const fullImg = document.querySelector("#fullImg");

const showFullImg = (pic) => {
  fullImgBox.classList.add("active");
  fullImg.src = pic;
};

const closeFullBox = () => {
  fullImgBox.classList.remove("active");
};
