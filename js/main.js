/*function chooseTimer(event, timeName) {
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
*/

document.getElementById('twentyFive').addEventListener("click", function () {
    document.getElementById('start').value = "25"
});

document.getElementById('short-break').addEventListener("click", function () {
    document.getElementById('start').value = "10"
});

document.getElementById('long-break').addEventListener("click", function () {
    document.getElementById('start').value = "5"
});

document.getElementById('custom-time').addEventListener("click", function () {
    document.getElementById('start').value = "25"
});

let countDownDate = new Date.now();

let x = setInterval(function () {

    let now = new Date.now();

    let distance = countDownDate - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("current-time").innerHTML = "Your "+start+" minutes are over!";
    }
}, 1000);