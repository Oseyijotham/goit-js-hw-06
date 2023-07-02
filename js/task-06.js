const input = document.querySelector("#validation-input");
  

input.addEventListener("blur", (event) => {
    
if(event.target.value.length === parseInt(input.getAttribute("data-length"))){
   event.target.setAttribute("class", "valid")  
    }
else {
  event.target.setAttribute("class", "invalid")    
}   
})


