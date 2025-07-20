var start = new Date().getTime();

function randomColor(){
var letter = '0123456789ABCDEF';
var color = '#';
for(var i = 0; i < 6; i++){
    color += letter[Math.floor(Math.random() *16)];
}
return color;
}

function move(){
    var left, top, wh;
    left = Math.random()*300;
    top = Math.random()*300;
    wh = ((Math.random()*400)+ 100);
    document.getElementById("box").style.position = "relative";
    document.getElementById("box").style.left = left +"px";
    document.getElementById("box").style.top = top +"px";
    document.getElementById("box").style.height = wh +"px";
    document.getElementById("box").style.width = wh +"px"; 
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.backgroundColor = randomColor();
    start = new Date().getTime();

}

move();
document.getElementById("box").onclick = function(){
   document.getElementById("box").style.display = "none";
    var end = new Date().getTime();
    var result = (end - start)/1000;
    alert(result+" s");
    move();
}


