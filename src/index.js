import { start } from './start.js';
import { hoverOn, hoverOff } from './hoverCntl.js';
import { holeclick, control } from './click.js';


$(document).ready(function(){
	$("#inputModal").modal('show');
});

$('#inputModal').modal({
	backdrop: 'static',
	keyboard: false  // to prevent closing with Esc button (if you want this too)
})

$('#inputModal').on('click','#start', function (e) {
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