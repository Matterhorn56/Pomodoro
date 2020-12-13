let tomato = [0, 0];
let sfx1 = new Audio('sfx/1.mp3');
let sfx2 = new Audio('sfx/2.mp3');
let sfx3 = new Audio('sfx/3.mp3');
let sfx4 = new Audio('sfx/4.mp3');
let sfx5 = new Audio('sfx/5.mp3');
let sfx6 = new Audio('sfx/6.mp3');
function setM(M) {tomato[0] = M;}
function setS(S) {tomato[1] = S;}
function display() {
	let M = tomato[0];
	let S = tomato[1];
	if (M < 10)	M = "0" + M;
	if (S < 10)	S = "0" + S;
	document.title = M + " : " + S;
	document.getElementById("timer").innerHTML = M + " : " + S;
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
	sfx4.play();
	document.getElementById('start').style.display = "none";
	document.getElementById('reset').style.display = "inline";
	setM(25);
	document.getElementById("box").style.boxShadow = "0 0 10px 2px #993300 inset";
	setTimeout(function() {
		document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
		sfx1.play();
		alert("productive session complete: take a short break."); setM(5);
	}, 25000 * 60);
	for (i = 2; i < 5; i++)
	{
		setTimeout(function() {
			document.getElementById("box").style.boxShadow = "0 0 10px 2px #993300 inset";
			sfx2.play();
			alert("break over: resume work."); setM(25);
		}, 5000 * 60 * i);
		setTimeout(function() {
			document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
			sfx1.play();
			alert("productive session complete: take a short break."); setM(5);
		}, 25000 * 60 * i);
	}
	setTimeout(function() {
		document.getElementById("box").style.boxShadow = "0 0 10px 2px #009900 inset";
		sfx3.play();
		alert("4 pomodoro's done: relax for a while, you earned it!"); setM(30);
	}, 30000 * 60 * 5);
	timer();
	document.getElementById('box').style.opacity = 1.0;
	document.getElementById("box").style.filter = "blur() brightness()";
}
function reset() {
	sfx5.play();
	sfx6.play();
	document.getElementById('reset').style.display = "none";
	document.getElementById('start').style.display = "inline";
	setM(0);
	setS(0);
	setTimeout(function() {
		var timeoutID = window.setTimeout(function() {}, 0);
		while (timeoutID > 0) {
			window.clearTimeout(timeoutID); // will do nothing if no timeout with id is present
			timeoutID--;
		}
		document.getElementById("timer").innerHTML = "";
		document.getElementById("box").style.boxShadow = "0 0 25px 5px black inset";
		document.getElementById('box').style.opacity = 0.9;
		document.getElementById("box").style.filter = "blur(2px) brightness(69%)";
		document.title = "Pomodoro";
	}, 690);
}