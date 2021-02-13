import { start } from './start.js';

export function end(){
	let score1 = document.getElementById(`score1`).textContent;
	let score2 = document.getElementById(`score2`).textContent;
	document.getElementById(`s1`).innerHTML = score1;
	document.getElementById(`s2`).innerHTML = score2;
		
	if(Number(score1) > Number(score2)){
		let name1 = document.getElementById(`name1`).textContent
		let name1A = name1.replace(":","");
		document.getElementById(`winner`).innerHTML = `${name1A} wins!`;
	}else if(Number(score1) === Number(score2)){
		document.getElementById(`winner`).innerHTML = `draw`;
	}else{
		let name2 = document.getElementById(`name2`).textContent
		let name2A = name2.replace(":","");
		document.getElementById(`winner`).innerHTML = `${name2A} wins!`;
	}
	$(document).ready(function(){
		$("#endModal").modal('show');
	});

	$('#endModal').on('click','#change', function (e) {
		let test = document.getElementById("player1").value;
		document.getElementById("player1").value = "";
		document.getElementById("player2").value = "";

		$('#endModal').modal('hide');
		
		$(document).ready(function(){
			$("#inputModal").modal('show');
		});
		
		$('#inputModal').modal({
			backdrop: 'static',
			keyboard: false  // to prevent closing with Esc button (if you want this too)
		});

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

	$('#endModal').on('click','#playAgain', function (e) {
		let p1 = $('#player1').val();
		let p2 = $('#player2').val();
	
		if(p1 !==""){
			document.getElementById("name1").innerHTML = `${p1}: `;
		}else{
			document.getElementById("name1").innerHTML ="Player1: ";
		}
		if(p2 !==""){
			document.getElementById("name2").innerHTML =`${p2}: `;
		}else{
			document.getElementById("name2").innerHTML ="Player2: ";
		}
		start();
		$('#endModal').modal('hide');
	});
}