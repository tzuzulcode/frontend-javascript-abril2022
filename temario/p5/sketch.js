const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight-4

// Function that returns a Promise for the FPS
const getFPS = () =>
  new Promise(resolve =>
    requestAnimationFrame(t1 =>
      requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
    )
)

// Calling the function to get the FPS

let num = 1

function setup(){
    createCanvas(canvasWidth,canvasHeight)
    background(205, 237, 253)
    rectMode(CENTER)
    // getFPS().then(fps => frameRate(fps));
    textAlign(CENTER, CENTER)
}

// La función se ejecuta un máximo de 60 veces por segundp
function draw(){
    const x = canvasWidth/2 + frameCount
    const y = canvasHeight/2 + frameCount

    // point(50,100)
    fill(182, 220, 254)
    // stroke(0,0,0,0)
    noStroke()
    // noFill()
    rect(x,y,100+frameCount,100+frameCount) // rect(x,y,width,height)

    stroke(0)
    strokeWeight(2)
    fill(222, 197, 227)
    ellipse(x, y, 30+frameCount, 30+frameCount)

    fill(129, 247, 229)
    noStroke()
    rect(x,y,20+frameCount,20+frameCount)

    fill(222, 197, 227)
    if(frameCount<60){
        textSize(48+frameCount)
    }else{
        textSize(100)
    }
    
    if(num===1){
        text("Hola", x,y)
    }
}