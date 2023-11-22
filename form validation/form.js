
var fname = document.getElementById("fname");
var email = document.getElementById("email");
var pass = document.getElementById("pass");

var emailRe = /[a-zA-z]{3}@\d{3}.\w{3}/;
var nameRe = /\w+/ig;
var passRe = /\w{8}/ig;

var select = document.getElementById("country");

var checkboxes = document.getElementsByName("fav");

var genderM = document.getElementById("male");
var genderF = document.getElementById("female");
var text = document.getElementById("text");

var checkedCount = 0;

function validate(e) {

e.preventDefault();
console.log(e)
    if (fname.value.match(nameRe)) {
        fname.style.border = "green 2px solid";


    } else {

        fname.style.border = "red 2px solid";
        text.innerHTML += "-You must write valid name ";
    }

    if (email.value.match(emailRe)) {

        email.style.border = "green 2px solid";

    } else {

        email.style.border = "red 2px solid";
        text.innerHTML += " -Email is not valid ";
    }


    if (pass.value.match(passRe)) {

        pass.style.border = "green 2px solid";

    } else {

        pass.style.border = "red 2px solid";
        text.innerHTML += " -Password must be 8 char at least ";

    }

    if (genderM.checked == false && genderF.checked == false) {
        text.innerHTML += "-You must select male or female ";
        return false;
    } else {


        console.log("valid")
    }


    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    console.log(checkedCount)

    if (checkedCount < 2) {

        text.innerHTML += " -please select at least 2 options ";
        return false;
    }
    else{

        console.log("valid")
    }

if (select.value == "")
{

    text.innerHTML += " -please select at least 1 country ";
        return false;
} else{

    console.log("valid")
}


alert("succssfully submitted")


}



