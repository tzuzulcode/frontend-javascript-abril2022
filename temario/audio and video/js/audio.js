function audioPlayer(){
    const audio = document.getElementById("audio")
    let audioDuration

    const play = document.getElementById("playAudio")
    const backwardSeconds = document.getElementById("backwardSecondsAudio")
    const forwardSeconds = document.getElementById("forwardSecondsAudio")
    const control = document.getElementById("controlAudio")
    const controlVolume = document.getElementById("controlAudioVolume")


    audio.addEventListener("loadeddata",()=>{
        audioDuration = audio.duration
    })

    audio.addEventListener("timeupdate",(event)=>{
        const percentage = (event.target.currentTime/audioDuration)*100
        control.value = percentage
    })

    play.onclick = ()=>{
        if(audio.paused){
            audio.play()
        }else{
            audio.pause()
        }
    }

    backwardSeconds.onclick = ()=>{
        audio.currentTime = audio.currentTime-10
    }
    forwardSeconds.onclick = ()=>{
        audio.currentTime = audio.currentTime+10
    }

    control.oninput = (event)=>{
        audio.currentTime = (audioDuration/100)*event.target.value
    }

    controlVolume.oninput=(event)=>{
        audio.volume = event.target.value/100
    }

}


export default audioPlayer