const boton = document.getElementById("boton")
const div = document.getElementById("div")
const div2 = document.getElementById("div2")
const form = document.getElementById("form")
const formDiv = document.getElementById("form-div")
const formP = document.getElementById("form-p")

// document.dispatchEvent(new CustomEvent("loading",{message:"Loading..."}))

boton.onclick = function(){
    console.log("Click")
}

boton.addEventListener("click",function(){
    console.log("Click")
})


div.onclick = function(event){
    console.log(event)
    alert("Presionaste el div")
}
div2.onclick = function(event){
    console.log(event)
    alert("Presionaste el div2")
    event.stopPropagation()
    // setTimeout(function(){
    //     event.target.dispatchEvent(event)
    // },5000)
}

form.addEventListener("click",(event)=>{
    alert(`Capturing... ${form.tagName}`)
},true) // El tercer parametro es el capture: Si es true, el handler se define en la fase de capturing
form.addEventListener("click",(event)=>{
    alert(`Bubbling... ${form.tagName}`)
},false) // El tercer parametro es el capture: Si es false, el handler se define en la fase de bubbling


formDiv.addEventListener("click",(event)=>{
    alert(`Capturing... ${formDiv.tagName}`)
    event.stopPropagation()
},true) 
formDiv.addEventListener("click",(event)=>{
    alert(`Bubbling... ${formDiv.tagName}`)
},false)

formP.addEventListener("click",(event)=>{
    alert(`Capturing... ${formP.tagName}`)
},true) 
formP.addEventListener("click",(event)=>{
    alert(`Bubbling... ${formP.tagName}`)
},false)