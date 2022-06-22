const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight-4

let x = canvasWidth/2
let y = canvasHeight/2

let size = 50
let start = 0

let toggle = true

let random1
let random2
let random3

function setup(){
    createCanvas(canvasWidth,canvasHeight)
    rectMode(CENTER)
    random1 = random()
    random2 = random(10)
    random3 = random(100,1000)
    frameRate(10)
}




function draw(){
    clear()
    background(205, 237, 253)
    fill(random(255),random(255),random(255))
    noStroke()
    // ellipse(mouseX, mouseY, size, size)
    // if(mouseIsPressed){
    //     toggle = false
    // }
    // if(mouseClicked()){
    //     toggle = !toggle
    // }
    if(toggle){
        fill(255)
    }


    // Ciclo
    // for(let i=0;i<10;i++){
    //     ellipse(i*50,i*50, size, size)
        
    // }
    //Optimizacion
    // if(start<canvasHeight+size ){
    //     if(frameCount===1){
    //         ellipse(0,0, size, size)
    //     }
    
    //     let pos = frameCount%10
    //     if(pos===0){
    //         start+=size
    //     }
    //     ellipse(size*pos,start, size, size)
    // }
    // const offset = 50

    // textSize(40)
    // text(random1, x, y-offset)
    // text(random2, x, y)
    // text(random3, x, y+offset)

    for(let i = 0 ; i<canvasWidth ; i=i+size){
        for(let j = 0 ; j<canvasHeight; j = j + size){
            ellipse(i, j, random(25, 50), random(25, 50))
        }
    }
}

function mousePressed(){
    toggle = !toggle
}