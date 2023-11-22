

var s = document.getElementById("stop");
var w;
var x;
window.onload = function () {
    w = window.open("", "", "width=400px height=200px");

    x = setInterval(function () {
        w.moveBy(10, 10);

    }, 1000);
}


function stop() {

    clearInterval(x)
}




