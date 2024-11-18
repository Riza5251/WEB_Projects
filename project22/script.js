const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase= document.getElementById("increase");
const size1 = document.getElementById("size");
const color1 = document.getElementById("color");
const clear = document.getElementById("clear");
const ctx = canvas.getContext("2d");


let size = 10
let color= 'black'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x=e.offsetX
    y=e.offsetY

})


canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x=undefined
    y=undefined

})
canvas.addEventListener('mousemove', (e) => {
    if(isPressed){

    x2 = e.offsetX
    y2 =e.offsetY

    drawcircle(x2, y2)
    drawline(x, y, x2, y2)

    x=x2
   y=y2
}

})


function drawcircle(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);  
    ctx.fillStyle = color
    ctx.fill()
}

function drawline(x1, y1, x2, y2)
{

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle=color
    ctx.lineWidth= size*2
    ctx.stroke()
}

function updateSizeOnScreen()
{
    size1.innerText=size
}

color1.addEventListener('change', (e) => color= e.target.value
)


increase.addEventListener('click', ()=>{
      size +=5  
      
      if(size>50) {
        size=50
      }
      updateSizeOnScreen()
})

decrease.addEventListener('click', ()=>{
    size -=5  
    
    if(size<5) {
      size=5
    }
    updateSizeOnScreen()
})


clear.addEventListener('click', ()=> ctx.clearRect(0,0,canvas.width,canvas.height))