(buttonModule = () => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".previous-btn");
  let imgList = document.querySelectorAll("img");
  let imgIndex = 0;

  nextBtn.addEventListener("click", nextImg);
  prevBtn.addEventListener("click", previousImg);

  function nextImg() {
    imgList[imgIndex].classList.add("hide");
    imgList[imgIndex + 1].classList.remove("hide");
    imgIndex++;
  }

  function previousImg() {
    console.log("Prev");
  }
})();
