var canvas=document.getElementById("canvas1")
ctx=canvas.getContext("2d")
color="Blue"
canvas.addEventListener("mousedown",draw)
function draw(e){
    console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
circle(mouse_x , mouse_y, color);
}
circle(300, 200,"Blue");
circle(400, 200,"Black");
circle(500, 200,"Red");
circle(350, 300,"Yellow");
circle(450, 300,"Green");
function circle(mouse_X,mouse_Y,scolor){
ctx.beginPath()
ctx.strokeStyle = scolor;
ctx.lineWidth = 10;
ctx.arc(mouse_X, mouse_Y, 80 ,0 , 2 * Math.PI);
ctx.stroke();;
}
