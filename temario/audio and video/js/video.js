function videoPlayer(){
    const video = document.getElementById("video")
    const videoContainer = document.getElementById("video-container")
    const play = document.getElementById("play")
    const control = document.getElementById("control")
    const backwardSeconds = document.getElementById("backwardSeconds")
    const forwardSeconds = document.getElementById("forwardSeconds")
    const fullScreen = document.getElementById("fullScreen")

    let onFullscreen = false

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

    control.addEventListener("mousemove",(event)=>{
        console.log(event)
    })

    backwardSeconds.onclick = () =>{
        video.currentTime = video.currentTime-1
    }
    forwardSeconds.onclick = () =>{
        video.currentTime = video.currentTime+1
    }

    fullScreen.onclick = ()=>{
        if(onFullscreen){
            onFullscreen = false
            document.exitFullscreen()
        }else{
            onFullscreen = true
            videoContainer.requestFullscreen()
        }
    }
        

    play.onclick = ()=>{
        if(video.paused){
            video.play()
        }else{
            video.pause()
        }
    }
}

export default videoPlayer