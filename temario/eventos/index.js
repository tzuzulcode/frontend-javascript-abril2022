const boton = document.getElementById("boton")

// document.dispatchEvent(new CustomEvent("loading",{message:"Loading..."}))

boton.onclick = function(){
    console.log("Click")
}

boton.addEventListener("click",function(){
    console.log("Click")
})