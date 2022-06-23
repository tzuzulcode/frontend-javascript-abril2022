let img;

let x = 0
let y = 0

const size = 100

function preload(){
    img = loadImage("./character.jpg")
}

function setup() {
    createCanvas(windowWidth,windowHeight-4)
    imageMode(CENTER)
}

function draw() {
    clear()
    // fill(241, 81, 86)
    // noStroke()
    if(dist(x,y,windowWidth/2,windowHeight/2)<100){
        fill(241, 81, 86)
        noStroke()
    }else{
        noFill()
        stroke(0)
    }
    ellipse(windowWidth/2, windowHeight/2, size, size)
    image(img, x, y, size,size)
    if(keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)){
        x-=8
        y-=8
    }else if(keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)){
        x-=8
        y+=8
    }else if(keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)){
        x+=8
        y-=8
    }else if(keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)){
        x+=8
        y+=8
    }else if(keyIsDown(LEFT_ARROW)){
        x-=10
    }else if(keyIsDown(RIGHT_ARROW)){
        x+=10
    }else if(keyIsDown(UP_ARROW)){
        y-=10
    }
    else if(keyIsDown(DOWN_ARROW)){
        y+=10
    }
}

// function keyPressed(){
//     if(keyCode===LEFT_ARROW){
//         // x = x - 10
//         x-=10
//     }else if(keyCode===RIGHT_ARROW){
//         x+=10
//     }else if(keyCode===UP_ARROW){
//         y-=10
//     }
//     else if(keyCode===DOWN_ARROW){
//         y+=10
//     }
// }