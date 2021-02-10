export function distribute(circleNum){
  let clickedCircle = circleNum;
  let firstValue = document.getElementById (`circle${circleNum}`).innerHTML;
  document.getElementById (`circle${circleNum}`).innerHTML ='0';
  
  for(let i = 0; i < firstValue; i++){
    if(circleNum === 12){
      circleNum = 1;   
    }
    else{
      circleNum++;
    }

    if(circleNum !== clickedCircle){
      let element = document.getElementById(`circle${circleNum}`);
      let value = Number(element.innerHTML);
        value++;
        element.innerHTML = value;
    }	
    else{
      firstValue ++;
    }
  }
  return [clickedCircle,circleNum];
}