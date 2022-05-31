const notification = document.querySelector("#subscribe")
const button = document.querySelector("#subscribe button")


button.addEventListener("click",()=>{
    notification.classList.add("transparent")
})


notification.addEventListener("transitionend",()=>{
    notification.style.display = "none"
})