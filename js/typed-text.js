var string = "> hello Capital One! my name is Ricardo Sanchez. i made this to introduce myself and express my interest in the ui/ux designer position... scroll down for more...";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',50);

}
frameLooper();