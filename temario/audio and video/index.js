const video = document.getElementById("video")
const audio = document.getElementById("audio")
const play = document.getElementById("play")
const control = document.getElementById("control")
const backwardSeconds = document.getElementById("backwardSeconds")
const forwardSeconds = document.getElementById("forwardSeconds")
const fullScreen = document.getElementById("fullScreen")

let duration

video.removeAttribute("controls")

video.addEventListener("playing",()=>{
    
})
video.addEventListener("pause",()=>{
    
})

video.addEventListener("loadeddata",(event)=>{
    duration = event.target.duration
})

video.addEventListener("timeupdate",(event)=>{
    const percentage = (event.target.currentTime/duration)*100
    control.value = percentage
})

// on input se activa en cada step del range
control.oninput = (event)=>{
    video.currentTime = (duration/100)*event.target.value
}

backwardSeconds.onclick = () =>{
    video.currentTime = video.currentTime-1
}
forwardSeconds.onclick = () =>{
    video.currentTime = video.currentTime+1
}

fullScreen.onclick = ()=>{
    video.requestFullscreen()
}

play.onclick = ()=>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}