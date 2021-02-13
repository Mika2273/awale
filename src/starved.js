export function backUp(){
  let circles =[];
  for(let i = 1; i <= 12 ; i++){
    circles.push(document.getElementById(`circle${i}`).textContent);
  }
  return circles;
}
export function starved(player) {
  if(player == 1){
    let total = 0; 
    for(let i = 7;  i <= 12; i++){
      total += Number(document.getElementById(`circle${i}`).textContent);
    }
    if (total > 0){
      return false;
    }else{
      return true;
    }    
  }else{
    let total = 0;
    for(let i = 1; i <= 6 ; i++){
      total += Number(document.getElementById(`circle${i}`).textContent);
    }
    if (total > 0){
      return false;
    }else{
      return true;
    }    
  }  
}
export function totalTray(player){
  let total = 0;
  if(player == 1){
    for(let i = 1;  i <= 6; i++){
      total += Number(document.getElementById(`circle${i}`).textContent);
    }
  }else{
    for(let i = 7;  i <= 12; i++){
      total += Number(document.getElementById(`circle${i}`).textContent);
    }
  }
  return total;
}
export function total(){
  let total = 0;
  for(let i = 1;  i <= 12; i++){
    total += Number(document.getElementById(`circle${i}`).textContent);
  }
  return total;
}
