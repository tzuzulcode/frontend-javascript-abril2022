const secondHand = document.querySelector(".secondhand")
const minuteHand = document.querySelector(".minutehand")
const hourHand = document.querySelector(".hourhand")
const digital = document.getElementById("digital");

(()=>{
    console.log("Hola mundo")
})(); // Funcion anonima autoejecutable (IIFE)(Immediately Invoked Function Expression).


(function(){

})();

(function updateClock(){
    let now = new Date()

    let sec = now.getSeconds()
    let min = now.getMinutes() + sec/60
    let hour = (now.getHours()%12) + min/60

    let secondAngle = 6 * sec // 6 -> 360/60
    let minuteAngle = 6 * min // 6 -> 360/60
    let hourAngle = 30 * hour // 30 -> 360/12

    
    secondHand.setAttribute("transform",`rotate(${secondAngle},50,50)`)
    minuteHand.setAttribute("transform",`rotate(${minuteAngle},50,50)`)
    hourHand.setAttribute("transform",`rotate(${hourAngle},50,50)`)

    digital.innerText=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

    setTimeout(updateClock,1000)

})()


function hola(){
    console.log("Hola")
}

(hola)()

// Funcion anónimas autoejecutables


