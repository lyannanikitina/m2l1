//JS
var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d");

//context.fillRect(50, 25, 200, 250);
var skvar = new Path2D();
skvar.moveTo(50,50);
skvar.lineTo(250,50);
skvar.lineTo(250,250);
skvar.lineTo(50,250);
skvar.lineTo(50,50);
context.stroke(skvar);
var krug = new Path2D();
krug.arc(150,150,100,0,2*Math.PI);
context.lineWidth = 5;
context.strokeStyle = "red";
context.stroke(krug);
