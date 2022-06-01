const notification = document.querySelector("#subscribe")
const button = document.querySelector("#subscribe button")


button.addEventListener("click",()=>{
    notification.classList.add("transparent")
})

button.addEventListener("animationstart",()=>{
    console.log("Animation started")
})
button.addEventListener("animationiteration",()=>{
    console.log("Animation iteration")
})
button.addEventListener("animationend",()=>{
    console.log("Animation ended")
})


notification.addEventListener("transitionend",()=>{
    notification.style.display = "none"
    // button.style.animation = ""
})