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
export function total(){
  let total = 0;
  for(let i = 1;  i <= 12; i++){
    total += Number(document.getElementById(`circle${i}`).textContent);
  }
  return total;
}
