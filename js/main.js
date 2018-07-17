let duration;
let start;

document.getElementById("default").addEventListener("click", () => {
	setTimer(25);
});

document.getElementById("short").addEventListener("click", () => {
	setTimer(5);
});

document.getElementById("long").addEventListener("click", () => {
	setTimer(15);
});

document.getElementById("start").addEventListener("click", startCountDown);
document.getElementById("pause").addEventListener("click", pauseCountDown);
document.getElementById("stop").addEventListener("click", stopCountDown);

function setTimer(minutes) {
	document.getElementById("time-left").innerHTML = `${minutes}:00`;
	duration = minutes * 60000;
}

// Count down function that"s called when start button is clicked
function startCountDown() {
	start = setInterval(() => {
		let seconds = parseInt((duration / 1000) % 60);
		let minutes = parseInt((duration / (1000 * 60)) % 60);
		if (seconds <= 10) {
			document.getElementById("time-left").innerHTML = `${minutes}:0${seconds}`;
		} else {
			document.getElementById("time-left").innerHTML = `${minutes}:${seconds}`;
		}

		duration -= 1000;
	}, 1000);
	if (duration === 0) {
		clearInterval(start);
		document.getElementById("time-left").innerHTML = "Done!";
	}
}

function pauseCountDown() {
	clearInterval(start);
}

function stopCountDown() {
	clearInterval(start);
	duration = 0;
	document.getElementById("time-left").innerHTML = "00:00";
}
