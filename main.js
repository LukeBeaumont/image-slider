(buttonModule = () => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".previous-btn");
  let imgList = document.querySelectorAll("img");
  let imgIndex = 0;
  const counters = document.querySelectorAll(".counter");

  nextBtn.addEventListener("click", () => {
    hideAllImg();
    nextImg();
    clearCounters();
    selectCounter(imgIndex);
  });
  prevBtn.addEventListener("click", () => {
    hideAllImg();
    previousImg();
    clearCounters();
    selectCounter(imgIndex);
  });

  counters.forEach((counter) =>
    counter.addEventListener("click", (e) => {
      hideAllImg();
      displayClickedImg(e.target.id);
      clearCounters();
      imgIndex = Number(e.target.id);
      selectCounter(e.target.id);
      console.log(imgIndex);
    })
  );

  function nextImg() {
    if (imgIndex < imgList.length - 1) {
      imgList[imgIndex + 1].classList.remove("hide");
      imgIndex++;
    } else if (imgIndex === imgList.length - 1) {
      imgIndex = 0;
      imgList[imgIndex].classList.remove("hide");
    }
    console.log(imgIndex);
  }

  function previousImg() {
    if (imgIndex === 0) {
      imgList[imgList.length - 1].classList.remove("hide");
      imgIndex = imgList.length - 1;
    } else if (imgIndex > 0) {
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
    if (imgIndex < imgList.length) {
      counters[index].classList.add("selected");
    } else if (imgIndex === imgList.length) {
      counters[index].classList.add("selected");
    }
  }

  function clearCounters() {
    counters.forEach((counter) => {
      counter.classList.remove("selected");
    });
  }
  //timer functionality
  function timer() {
    hideAllImg();
    nextImg();
    clearCounters();
    selectCounter(imgIndex);
  }
  document.addEventListener("DOMContentLoaded", setInterval(timer, 5000));
})();
