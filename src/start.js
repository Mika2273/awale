import { click } from './click.js';
import { hoverOn, hoverOff } from './hoverCntl.js';

export function start(){   
	hoverOn('player2');
	hoverOff('player1');

	let circles = document.getElementsByClassName('circle');
	for(let i =0 ; i < 12 ; i++){
		circles[i].innerHTML = "4";
	}
	let $score1 = document.getElementById('score1');
	$score1.innerHTML = "0";

	let $score2 = document.getElementById('score2');
	$score2.innerHTML = "0";

	document.querySelector('#p2Board').style.border = "thick solid #0000FF";
	
	let players = document.getElementsByClassName('player2') 
	for(let i=0 ; i < 6 ; i++){
		players[i].addEventListener("click",click);
	}
}
