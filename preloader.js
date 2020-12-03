

window.addEventListener("DOMContentLoaded", start);



function start(){
    console.log("start active");
    
    document.querySelector("#showcase > div > p").classList.add("hide");
    document.querySelector("#showcase > div > a").classList.add("hide");
    document.querySelector("#showcase > div.checkmark-icon > img").classList.add("hide");
   
    setTimeout((removeHide), 3000);

}

function removeHide(){

    document.querySelector("#showcase > div.checkmark-icon > img").classList.remove("hide");
    document.querySelector("#showcase > div > p").classList.remove("hide");
    document.querySelector("#showcase > div > a").classList.remove("hide");
    document.querySelector("#showcase > svg").classList.add("hide");
    document.querySelector("#showcase > div > h2").classList.add("hide");

}