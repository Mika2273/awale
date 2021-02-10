import { start } from './start.js';
import { hoverOn, hoverOff } from './hoverCntl.js';
import { holeclick, control } from './click.js';


$(document).ready(function(){
	$("#myModal").modal('show');
});

$('#myModal').modal({
	backdrop: 'static',
	keyboard: false  // to prevent closing with Esc button (if you want this too)
})

$('#myModal').on('click','#start', function (e) {
	let p1 = $('#player1').val();
	let p2 = $('#player2').val();

	if(p1 !==""){
    document.getElementById("name1").innerHTML = `${p1}: `;
  }else{
    document.getElementById("name1").innerHTML ="Player1: ";
  }
	if(p1 !==""){
    document.getElementById("name2").innerHTML =`${p2}: `;
  }else{
    document.getElementById("name2").innerHTML ="Player2: ";
  }
  start();
});

export function backUp(){
  let circles =[];
  for(let i = 1; i <= 12 ; i++){
    circles.push(document.getElementById(`circle${i}`).textContent);
  }
  return circles;
}
export function starved(player) {
  if(player == 1){
    let total2 = 0; 
    for(let i = 7;  i <= 12; i++){
      total2 += Number(document.getElementById(`circle${i}`).textContent);
    }
    console.log("total2="+total2);
    if (total2 > 0){
      return false;
    }else{
      return true;
    }    
  }else{
    let total1 = 0;
    for(let i = 1; i <= 6 ; i++){
      total1 += Number(document.getElementById(`circle${i}`).textContent);
    }
    console.log("total1="+total1);
    if (total1 > 0){
      return false;
    }else{
      return true;
    }    
  }  
}
