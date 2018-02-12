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

let time = document.getElementById('start').value;

let countDownDate = new Date.setMinutes(time, 0, 0);

document.getElmentById("twentyFive").addEventListener("click", startCountDown);
document.getElmentById("short-break").addEventListener("click", startCountDown);
document.getElmentById("long-break").addEventListener("click", startCountDown);
document.getElmentById("custom-time").addEventListener("click", startCountDown);

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

let startCountDown = setInterval(function () {
    let now = new Date.now();

    let distance = countDownDate - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("current-time").innerHTML = "Your " + time + " minutes are over!";
    }
}, 1000);