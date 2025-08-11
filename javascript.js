let squareContainer = document.getElementById("square-cont");
let sizeButton = document.getElementById("sizebutton");

function divMaker(parent, number){
    let size = number*number;
    
    for (let index = 1; index <= size; index++){
        let div = document.createElement("div");
        div.className ="square";
        div.style.flex = "1 0 "+(100/(number))+"%";
        
        div.addEventListener("mouseover", (event) => {
            div.style.opacity = +div.style.opacity + 0.1;          
            div.style.backgroundColor = "rgb("+(Math.random()*(255 - 0) + 0)+","+(Math.random()*(255 - 0) + 0)+","+(Math.random()*(255 - 0) + 0)+")";    
        });
        
        squareContainer.appendChild(div);
      
    }
}

divMaker(squareContainer, 16);

sizeButton.addEventListener("mousedown",() =>{
    sizeButton.className = "clicked"; 
    let rect = sizeButton.getBoundingClientRect;
    console.log(sizeButton.style.top);
    sizeButton.style.top = rect.top - 8 + "px";
    console.log(sizeButton.style.top);
});
sizeButton.addEventListener("mouseup",() => {
    sizeButton.classList.remove("clicked");
    let rect = sizeButton.getBoundingClientRect;
    sizeButton.style.top = rect.top + 8 + "px";
});

sizeButton.addEventListener("click", () => {
   
   let promptNumber = window.prompt("enter size by amount of squares per side:", "max. 100"); 
   
   while(promptNumber>100){
        promptNumber = window.prompt("nope, too much. under 100 please.");
   }

   squareContainer.innerHTML ="";
   divMaker(squareContainer, promptNumber);
});

