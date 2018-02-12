let length = document.getElementById('start').value;
let countDownDate = new Date();
let start = setInterval(function () {startCountDown()},1000);
let isSet = 0;
// Set start value based on tab clicked
document.getElementById('default-time').addEventListener("click", function () {
    document.getElementById('start').value = "25";
});

document.getElementById('five').addEventListener("click", function () {
    document.getElementById('start').value = "5";
});

document.getElementById('ten').addEventListener("click", function () {
    document.getElementById('start').value = "10";
});

document.getElementById('custom-time').addEventListener("click", function () {
    document.getElementById('start').value = "60";
});

// Count down function that's called when start button is clicked
function startCountDown(){
  if(isSet == 1){
    countDownDate.setMinutes(countDownDate.getMinutes() + length);
  }

  let now = new Date().getTime();
  let distance = countDownDate- now ;
  let seconds = Math.floor(distance / 1000)%60;
  let minutes = Math.floor(seconds /60)%60;

  document.getElementById("time-left").innerHTML = minutes + ":" + seconds;

  if (distance < 0) {
      clearInterval(start);
      document.getElementById("time-left").innerHTML = "Your " + length + " minutes are over!";
  }
};

document.getElementById('start').addEventListener("click", startCountDown);
//document.getElmentById('pause').addEventListener("click", startCountDown);
//document.getElmentById('reset').addEventListener("click", startCountDown);
