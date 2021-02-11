export function end(){
	let score1 = document.getElementById(`score1`).textContent;
	let score2 = document.getElementById(`score2`).textContent;
	
	document.getElementById(`s1`).innerHTML = score1;
	document.getElementById(`s2`).innerHTML = score2;
		
	if(score1 > score2){
		let name = document.getElementById(`name1`).textContent
		let nameA = name.replace(":","");
		document.getElementById(`winner`).innerHTML = `${nameA} wins`;
	}else if(score1 === score2){
		document.getElementById(`winner`).innerHTML = `draw`;
	}else{
		let name = document.getElementById(`name2`).textContent
		let nameA = name.replace(":","");
		document.getElementById(`winner`).innerHTML = `${nameA} wins`;
	}
	$(document).ready(function(){
		$("#endModal").modal('show');
	});
}

// export function end(){
// 	$(document).ready(function(){
// 		$("#endModal").modal('show');
// 	});	
// }