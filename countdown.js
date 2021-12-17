window.addEventListener("DOMContentLoaded", function blackFridayCountdown() {
	function getTimeRemaining() {
		let remaining = Math.abs(endDate - new Date());
		let seconds = Math.floor((remaining / 1000) % 60);
		seconds = adjustDateTimeString(seconds);
		document.querySelector(".cd-elem-10").innerHTML = seconds[0];
		document.querySelector(".cd-elem-11").innerHTML = seconds[1];

		let minutes = Math.floor((remaining / 1000 / 60) % 60);
		minutes = adjustDateTimeString(minutes);
		document.querySelector(".cd-elem-7").innerHTML = minutes[0];
		document.querySelector(".cd-elem-8").innerHTML = minutes[1];

		let hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
		hours = adjustDateTimeString(hours);
		document.querySelector(".cd-elem-4").innerHTML = hours[0];
		document.querySelector(".cd-elem-5").innerHTML = hours[1];

		let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
		days = adjustDateTimeString(days);
		document.querySelector(".cd-elem-1").innerHTML = days[0];
		document.querySelector(".cd-elem-2").innerHTML = days[1];

		return;
	}

	/*
	 * If a unit of time (n) is a single digit in length,
	 * prepend a '0' and return a 2 digit string
	 */
	function adjustDateTimeString(n) {
		return n > 9 ? `${n}` : `0${n}`;
	}

	var endDate = new Date(2021, 11, 18, 00, 00, 00, 0);

	getTimeRemaining();
	setInterval(function () {
		getTimeRemaining();
	}, 1000);
});
