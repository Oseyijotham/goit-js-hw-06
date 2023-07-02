function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpace = document.querySelector(".color");
const colorChanger = document.querySelector(".change-color");

colorChanger.addEventListener("click", ()=>{
  colorSpace.style.backgroundColor = getRandomHexColor()
})