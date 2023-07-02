const controller = document.querySelector("#font-size-control");
const wrd = document.querySelector("#text");

controller.addEventListener("input", event => {
    
    wrd.style.fontSize = event.target.value + "px";
})

