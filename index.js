function distanceFromHqInBlocks(someValue) {
  if(someValue > 42){
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
let numBlocks;
numBlocks = distanceFromHqInBlocks(someValue)
let blockFeet = numBlocks *264;

return blockFeet;
}


function distanceTravelledInFeet(start, destination) {
  let distance;
  distance = Math.abs(destination - start) 
  let blockFeet = distance *264;
return blockFeet;
  
}

function calculatesFarePrice(start, destination) {

  let blockFeet = ((Math.abs(start - destination)* 264));
  if (blockFeet <= 400){
    return 0;
  }
  else if  (blockFeet> 400 && blockFeet <= 2000){
    return (.02 * (blockFeet-400))
  }
  else if (blockFeet >2000 && blockFeet < 2500){
    return 25;
  }
  else{
    return('cannot travel that far')
  }
}