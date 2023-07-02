function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector("#boxes");
const inter = document.querySelector("#controls");
const inputSpace = inter.querySelector("input")
const createButton = inter.querySelectorAll("button")[0]
const destroyButton = inter.querySelectorAll("button")[1]
let amount;


inputSpace.addEventListener("blur", (event)=> {
  
  //alert(event.target.value)
  amount = event.target.value
  console.log(amount);
})

createButton.addEventListener("click", () => {
  //alert(amount)

  function createBoxes(amount) {
    //let currentDivs = 0;

    for (let i = 1; i <= amount; i++) {
      const newBox = document.createElement("div");
      boxContainer.append(newBox);
    }
  }
  createBoxes(amount)
  const newBoxes = boxContainer.querySelectorAll("div");
  for (let i = 0; i <= newBoxes.length; i++){
    if (i === 0) {
      newBoxes[i].style.height = "30px";
      newBoxes[i].style.width = "30px";
      newBoxes[i].style.backgroundColor = getRandomHexColor();
    }

    else {
      newBoxes[i].style.height = parseInt(newBoxes[i - 1].style.height) + 10 + "px";
      newBoxes[i].style.width = parseInt(newBoxes[i - 1].style.width) + 10 + "px";
      newBoxes[i].style.backgroundColor = getRandomHexColor();
    }
  }
})





destroyButton.addEventListener("click", () => {
  function destroyBoxes() { 
    //newBox.remove();
    boxContainer.innerHTML = "";
  }
  destroyBoxes()
})


