function clock(){

var hours = document.getElementById("hour");
var mins = document.getElementById("min");
var secs = document.getElementById("sec");
var ap = document.getElementById("ampm");

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var a = "AM";

if(h > 12){
    h = h - 12;
    var a = "PM";
}

h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

hours.innerHTML = h;
mins.innerHTML = m;
secs.innerHTML = s;
ap.innerHTML = a;

}


var interval = setInterval(clock,1000);
