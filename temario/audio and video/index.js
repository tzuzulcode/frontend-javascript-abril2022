const video = document.getElementById("video")
const audio = document.getElementById("audio")
const play = document.getElementById("play")
const control = document.getElementById("control")

video.removeAttribute("controls")

video.addEventListener("playing",()=>{
    alert("Playing...")
})
video.addEventListener("pause",()=>{
    alert("Pause")
})



play.onclick = ()=>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

control.onchange = (event)=>{
    console.log(event.target.value)
    alert("Changing...")
}