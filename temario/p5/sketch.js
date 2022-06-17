const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight-4
console.log(canvasWidth)
console.log(canvasHeight)

let count = 0

function setup(){
    createCanvas(canvasWidth,canvasHeight)
    background(205, 237, 253)
    rectMode(CENTER)
}

function draw(){
    const x = canvasWidth/2 + count
    const y = canvasHeight/2 + count

    // point(50,100)
    fill(182, 220, 254)
    // stroke(0,0,0,0)
    noStroke()
    // noFill()
    rect(x,y,100+count,100+count) // rect(x,y,width,height)

    stroke(0)
    strokeWeight(2)
    fill(222, 197, 227)
    ellipse(x, y, 30+count, 30+count)

    fill(129, 247, 229)
    noStroke()
    rect(x,y,20+count,20+count)

    count = count + 0.1
}