const radio1 = document.getElementById("r1");
const radio2 = document.getElementById("r2");
const radio3 = document.getElementById("r3");

const slider = document.getElementById("slider");

const elements = [radio1, radio2, radio3];

const timerId = setInterval(() => {
  const nextIndex = getNextSlideIndex(elements);

  elements[nextIndex].checked = true;
  changeSlide(nextIndex);
}, 5000);

radio1.checked = true;

elements.forEach((item, index) => {
  item.addEventListener("change", () => {
    changeSlide(index);
  });
});

function changeSlide(input) {
  slider.style.marginLeft = `-${input}00%`;
}

function getNextSlideIndex(elements) {
  const index = elements.findIndex((item) => item.checked);

  if (index === 2) {
    return 0;
  }

  return index + 1;
}
