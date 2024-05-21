document.addEventListener("DOMContentLoaded",(event) =>{

const button =document.getElementById("catch-me-button");
const container= document.getElementById("game-container");
let isMoving=false;

button.addEventListener("mouseover", moveButton);
button.addEventListener("click", changeButtonColor);

function moveButton(){
    if(!isMoving){
        isMoving=true;
    

    const containerRect=container.getBoundingClientRect();
    const buttonRect=button.getBoundingClientRect();
    const newLeft=Math.random()*(containerRect.width-buttonRect.width);
    const newTop=Math.random()*(containerRect.height-buttonRect.height);

    button.style.left=` ${newLeft}px`;
    button.style.top=` ${newTop}px`;

    setTimeout(()=>{
        isMoving=false;
    },300);
    }
    }   

    function changeButtonColor(){
        const randomColor=getRandomColor();
        button.style.backgroundColor=randomColor;
    }

    function getRandomColor(){
        const letters="0123456789ABCDEF"
        let color="#"
        for(let i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

});