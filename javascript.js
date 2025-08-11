let squareContainer = document.getElementById("square-cont");
let sizeButton = document.getElementById("sizebutton");

function divMaker(parent, number){
    let size = number*number;
    for (let index = 1; index <= size; index++){
        let div = document.createElement("div");
        div.className ="square";
        div.style.flex = "1 0 "+(100/(number))+"%";
        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "yellow";
        });
        squareContainer.appendChild(div);
      
    }
}

divMaker(squareContainer, 16);

sizeButton.addEventListener("click", () => {
   let promptNumber = window.prompt("enter size by amount of squares per side:", "max. 100"); 
   squareContainer.innerHTML ="";
   divMaker(squareContainer, promptNumber);
});

/*
document.addEventListener("mouseover", (event)=>{
    let target = event.target;
    console.log(target.id)
    if (event.target.id == "square") {
        event.target.className="hover";
        
    }

});
*/