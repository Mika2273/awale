import { click } from './click.js';
import { hoverOn, hoverOff } from './hoverCntl.js';
import { backUp, starved, total } from './starved.js';
import { end } from './end.js';

export function addScore1(advancedCircleNum){ 
  let $score1 = document.getElementById('score1').textContent;
  let score =Number($score1);
	let backUpScore = score;
  let table = backUp(); 
  while(advancedCircleNum>=7){
    let number = Number(document.getElementById(`circle${advancedCircleNum}`).textContent);
    if(number <= 3 && number > 1){
      score += Number(document.getElementById(`circle${advancedCircleNum}`).textContent);
      let x = score.toString(); 
      document.getElementById('score1').innerHTML = x; 
      document.getElementById (`circle${advancedCircleNum}`).innerHTML ='0';  
    }else{
      advancedCircleNum = 6;
    }
		advancedCircleNum--;
  }
	if(starved(1)==false){
		if (total()>40){
			hoverOff('player1');
			hoverOn('player2');
			let players2 = document.getElementsByClassName('player2') 
			for(let i=0 ; i < 6 ; i++){
				if(players2[i].textContent !== "0"){
					players2[i].addEventListener("click",click);
				}
			}
			let players1 = document.getElementsByClassName('player1') 
			for(let i=0 ; i < 6 ; i++){
					players1[i].removeEventListener("click",click);
			}
			document.querySelector('#p1Board').style.border = "none";
			document.querySelector('#p2Board').style.border = "thick solid #0000FF";
		}else{
			end();
		}
	}else{
    for(let i = 1; i <= 12 ; i++){
      document.getElementById (`winner`).innerHTML = table[i];
    }
    document.getElementById('score1').innerHTML = backUpScore; 
	}
}	
