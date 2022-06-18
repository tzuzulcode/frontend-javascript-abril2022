const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight-4

let x = canvasWidth/2
let y = canvasHeight/2

let size = 10

let toggle = true

function setup(){
    createCanvas(canvasWidth,canvasHeight)
    background(205, 237, 253)
    rectMode(CENTER)
}

function draw(){
    fill(200,40,100)
    noStroke()
    ellipse(mouseX, mouseY, size, size)
    // if(mouseIsPressed){
    //     toggle = false
    // }
    // if(mouseClicked()){
    //     toggle = !toggle
    // }
    // if(toggle){
    //     fill(255)
    //     rect(x, y, size*0.70, size*0.70)
    // }



}