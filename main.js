(buttonModule = () => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".previous-btn");
  let imgList = document.querySelectorAll("img");
  let imgIndex = 0;
  const counters = document.querySelectorAll(".counter");

  nextBtn.addEventListener("click", () => {
    nextImg(), selectCounter();
  });
  prevBtn.addEventListener("click", () => {
    previousImg(), selectCounter();
  });

  function nextImg() {
    if (imgIndex < imgList.length - 1) {
      imgList[imgIndex].classList.add("hide");
      imgList[imgIndex + 1].classList.remove("hide");
      imgIndex++;
    } else if (imgIndex === imgList.length - 1) {
      imgList[imgIndex].classList.add("hide");
      imgIndex = 0;
      imgList[imgIndex].classList.remove("hide");
    }
    console.log(imgIndex);
  }

  function previousImg() {
    if (imgIndex === 0) {
      imgList[imgIndex].classList.add("hide");
      imgList[imgList.length - 1].classList.remove("hide");
      imgIndex = imgList.length - 1;
    } else if (imgIndex > 0) {
      imgList[imgIndex].classList.add("hide");
      imgList[imgIndex - 1].classList.remove("hide");
      imgIndex--;
    }
    console.log(imgIndex);
  }

  function selectCounter() {
    counters.forEach((counter) => counter.classList.remove("selected"));
    counters[imgIndex].classList.add("selected");
  }
})();
