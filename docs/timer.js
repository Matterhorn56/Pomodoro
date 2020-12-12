let tomato = [0, 0];
function setM(M) {tomato[0] = M;}
function setS(S) {tomato[1] = S;}
function display() {
	let M = tomato[0];
	let S = tomato[1];
	if (M < 10)	M = "0" + M;
	if (S < 10)	S = "0" + S;
	document.getElementById("timer").innerHTML = M + " : " + S;
	document.title = M + " : " + S;
}
function timer() {
	//document.getElementById("timer").innerHTML = tomato[0] + " : " + tomato[1];
	var pomodoro = setInterval(function() {
		if (tomato[0] + tomato[1] == 0)
			clearInterval(pomodoro);
		else if (tomato[1] == 0)
		{
			tomato[0]--;
			tomato[1] = 59;
		}
		else
			tomato[1]--;
		display();
	}, 1000);
}
function start() {
	setM(25);
	document.getElementById("box").style.boxShadow = "0 0 10px 2px #993300 inset";
	setTimeout(function() {
		document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
		alert("productive session complete: take a short break."); setM(5);
	}, 25000 * 60);
	for (i = 2; i < 5; i++)
	{
		setTimeout(function() {
			document.getElementById("box").style.boxShadow = "0 0 10px 2px #993300 inset";
			alert("break over: resume work."); setM(25);
		}, 5000 * 60 * i);
		setTimeout(function() {
			document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
			alert("productive session complete: take a short break."); setM(5);
		}, 25000 * 60 * i);
	}
	setTimeout(function() {
		document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
		alert("4 pomodoro's done: relax for a while, you earned it!"); setM(30);
	}, 30000 * 60 * 5);
	timer();
	document.getElementById('box').style.opacity = 1.0;
	document.getElementById("box").style.filter = "blur() brightness()";
}
function reset() {
	setM(0);
	setS(0);
	setTimeout(function() {
		var timeoutID = window.setTimeout(function() {}, 0);
		while (timeoutID > 0) {
			window.clearTimeout(timeoutID); // will do nothing if no timeout with id is present
			timeoutID--;
		}
		document.getElementById("timer").innerHTML = "";
	}, 690);
	document.getElementById("box").style.boxShadow = "0 0 25px 5px black inset";
	document.getElementById('box').style.opacity = 0.9;
	document.getElementById("box").style.filter = "blur(2px) brightness(69%)";
	document.title = "Pomodoro";
}