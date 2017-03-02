var winW=document.documentElement.clientWidth;
var desW=1200;
var scale=1200/100;
document.documentElement.style.fontSize=winW/scale+"px";
window.onresize=function(){
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/scale+"px";
}