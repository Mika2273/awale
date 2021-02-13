import { click } from './click.js';
import { hoverOn, hoverOff } from './hoverCntl.js';
import { backUp, starved, totalTray, total } from './starved.js';
import { end } from './end.js';

export function addScore2(advancedCircleNum){
  let $score2 = document.getElementById('score2').textContent;
  let score = Number($score2);
  let backUpScore = score;
  let table = backUp();
   while(advancedCircleNum <7 && advancedCircleNum >0){
    let number = Number(document.getElementById(`circle${advancedCircleNum}`).textContent);
    if(number <= 3 && number > 1){
      score += Number(document.getElementById(`circle${advancedCircleNum}`).textContent);
      let x = score.toString(); 
      document.getElementById('score2').innerHTML = x; 
      document.getElementById (`circle${advancedCircleNum}`).innerHTML ='0';
    }else{
      advancedCircleNum = 8;
    }
    advancedCircleNum--;  
  }
	if(starved(2)==false){
    if (total()>3 && totalTray(2)>0){
      hoverOn('player1'); 
      hoverOff('player2');
      let players1 = document.getElementsByClassName('player1') 
      for(let i=0 ; i < 6 ; i++){
        if(players1[i].textContent !== "0"){
          players1[i].addEventListener("click",click);
        }
      }
      let players2 = document.getElementsByClassName('player2') 
      for(let i=0 ; i < 6 ; i++){
          players2[i].removeEventListener("click",click);
      }
      document.querySelector('#p1Board').style.border = "thick solid #0000FF";
      document.querySelector('#p2Board').style.border = "none";
    }else{
      end();
    }
  }else{
    for(let i = 1; i <= 12 ; i++){
      document.getElementById (`circle${i}`).innerHTML = table[i];
    }
    document.getElementById('score2').innerHTML = backUpScore; 
  }
}
