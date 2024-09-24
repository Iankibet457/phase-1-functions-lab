// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    if (value >42 ){
        return value - 42
    }else {
        return 42 - value
    }
    
  }

  function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)* 264

  }

  function distanceTravelledInFeet(num1 , num2){
    if (num1 > num2){
        return (num1-num2)*264
    }else{
        return (num2-num1)*264
    }
  }

  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400){
        return 0
    }else if (distance > 400 && distance <= 2000){
        return (distance-400)/50
        
    }else if (distance > 2000 && distance < 2500){
        return 25
    }else
        return "cannot travel that far" 

  }