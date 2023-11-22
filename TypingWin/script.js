var send = document.getElementById("send")

var massage = document.getElementById("massage");

var Tab;

function openWindow() {
  Tab = window.open("Tab.html", "", "width=400px height=200px")
}


send.addEventListener("click", openWindow)


var str = massage.innerText;
var index = 0;

send.addEventListener("click", function () {
  character(index);
});

function character(index) {
  if (index < str.length) {
    Tab.document.write(str.charAt(index))
    index++;

    setTimeout(function () {
      character(index);
    }, 100);

  }
  else {
    setTimeout(function () {
      Tab.close();
    }, 1000)
  }

}


