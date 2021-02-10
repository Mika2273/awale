export function hoverOn(player){
	let players = document.getElementsByClassName(player);
	for(let i =0 ; i < 6 ; i++){
		players[i].classList.add(`${player}_on`);
	}  
}
export function hoverOff(player){
	let players = document.getElementsByClassName(player);
	for(let i =0 ; i < 6 ; i++){
		players[i].classList.remove(`${player}_on`);
	}  
}