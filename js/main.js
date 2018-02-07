function chooseTimer(event, timeName) {
  let i;
  const timerContent, timerTitle;

  timerContent = document.getElementsByClassName("timer-content");
  for (i = 0; i < timerContent.length; i++)
    timerContent[i].style.display = "none";

  timerTitle = document.getElementsByClassName("timer-content");
  for (i = 0; i < timerTitle.length; i++)
    timerTitle[i].className = timerTitle[i].className.replace("active", "");

  document.getElementById(timeName).style.display = "block";
  event.currentTarget.className += " active";
}

/*
document.getElmentById("25bnt").addEventListener("click",setTimeout(function () { alert("Your 20 minutes are over!"); },  120000 ););
document.getElmentById("10bnt").addEventListener("click",setTimeout(function () { alert("Your 10 minutes are over!"); },  600000 ););
document.getElmentById("5bnt").addEventListener("click",setTimeout(function () { alert("Your 5 minutes are over!"); },  300000););
*/

let base = document.querySelector("#start");
base.addEventListener("click", dosometing,false);
function dosometing(e){
  let start = document.e.currentTarget.value;
  setTimeout(function () { alert("Your "+start+" minutes are over!"); },  60000 *start);
}
