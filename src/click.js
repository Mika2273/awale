import { distribute } from './distribute.js';
import { addScore1 } from './score1.js';
import { addScore2 } from './score2.js';

export function click(event){
  let circleNumstr = event.target.getAttribute("id");
  let circleNum = Number(circleNumstr.substring(6));
  control(circleNum)
}
function control(circleNum){
	let result = distribute(circleNum);
	let clickedCircle = result[0];
	let advancedCircleNum =result[1];
	if(clickedCircle >=7){
		addScore2(advancedCircleNum);
	}else{
		addScore1(advancedCircleNum);
	}  
}