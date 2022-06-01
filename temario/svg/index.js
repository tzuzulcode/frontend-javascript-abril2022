function updateClock(){
    let now = new Date()

    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hour = (now.getHours()/12) + min/60

}

// COmpletar funcion. Funcion anónimas autoejecutables