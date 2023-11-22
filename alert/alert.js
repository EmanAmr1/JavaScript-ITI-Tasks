
var succ = document.getElementById("succ");
var error = document.getElementById("error")

//navigator.geolocation.getCurrentPosition(successFun, errorFun);



function successFun(x) {
    succ.style.display = "block";
    error.style.display = "none";
}

function errorFun(x) {
    succ.style.display = "none";

    error.style.display = "block";
}