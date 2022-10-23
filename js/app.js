//burger
const burger = document.querySelector(".burger__menu");
const burgerNav = document.querySelector(".header__nav");
const overlay = document.querySelector('.overlay')

burger.addEventListener("click", () => {
  burgerNav.classList.toggle("header__nav--active");
  burger.querySelector(".burger-lines").classList.toggle("burger-lines--cross");
  overlay.classList.toggle('overlay--active')
  document.querySelector('body').classList.toggle('body--overflow')
});

//slider
let position = 0,
  dotIndex = 0;
const showSlider = 1,
  moveSlider = 1,
  sliderContainer = document.querySelector(".feedback__slider"),
  sliderTrack = document.querySelector(".feedback__slider-box"),
  sliderItem = document.querySelectorAll(".feedback__box-items"),
  dotsSlider = document.querySelectorAll(".dots"),
  prevBtn = document.querySelectorAll(".left-arrow"),
  nextBtn = document.querySelectorAll(".right-arrow"),
  itemsCount = sliderItem.length,
  itemWidth = sliderContainer.clientWidth / showSlider,
  positionSlider = moveSlider * itemWidth;

window.screen.width >= 768 ? (dotIndex = 4) : (dotIndex = 0);

for (let i = 0; i < itemsCount; i++) {
  dotsSlider.forEach((item) => {
    item.insertAdjacentHTML(
      "afterbegin",
      '<svg class="dots-icon" width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2.9248" r="2" fill="white"/></svg>'
    );
  });
}

const dotsItem = document.querySelectorAll(".dots-icon");
dotsItem[dotIndex].classList.add("dots-icon--active");

sliderItem.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

nextBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const itemLeft =
      itemsCount - (Math.abs(position) + moveSlider * itemWidth) / itemWidth;
    position -= itemLeft >= moveSlider ? positionSlider : itemLeft * itemWidth;
    dotIndex++;
    setPosition();
    checkBtn();
    checkDots(dotIndex);
  });
});

prevBtn.forEach((item) => {
  item.addEventListener("click", () => {
    position += positionSlider;
    dotIndex--;
    setPosition();
    checkBtn();
    checkDots(dotIndex);
  });
});

const setPosition = function () {
  sliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtn = function () {
  prevBtn.forEach((item) => {
    item.disabled = position === 0;
  });
  nextBtn.forEach((item) => {
    item.disabled = position <= -(itemsCount - showSlider) * itemWidth;
  });
};

const checkDots = function (index) {
  for (let dot of dotsItem) {
    dot.classList.remove("dots-icon--active");
  }
  dotsItem[index].classList.add("dots-icon--active");
};


//tabs
function tabsOpen(desctopTab, desctopOpen) {
  const tabs = document.querySelectorAll(desctopTab);
  const openTab = document.querySelectorAll(desctopOpen);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (e) => {
      for (let v = 0; v < openTab.length; v++) {
        if (i == v) {
          openTab[v].classList.toggle("question-answer--active");
        }
      }
    });
  }
}

tabsOpen(".faq__box-question", ".question-answer");