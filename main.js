(buttonModule = () => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".previous-btn");
  let imgList = document.querySelectorAll("img");
  let imgIndex = 0;
  const counters = document.querySelectorAll(".counter");

  nextBtn.addEventListener("click", () => {
    nextImg();
  });
  prevBtn.addEventListener("click", () => {
    previousImg();
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

  function hideAllImg() {
    imgList.forEach((img) => img.classList.add("hide"));
  }
  function displayClickedImg(index) {
    imgList[index].classList.remove("hide");
  }

  function selectCounter(index) {
    counters[index].classList.add("selected");
  }

  function clearCounters() {
    counters.forEach((counter) => {
      counter.classList.remove("selected");
    });
  }

  counters.forEach((counter) =>
    counter.addEventListener("click", (e) => {
      hideAllImg();
      displayClickedImg(e.target.id);
      clearCounters();
      selectCounter(e.target.id);
    })
  );
})();
