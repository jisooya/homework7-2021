var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
		console.log("New location: " + video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("Go back to beginning.");
	}
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
