function scuberGreetingForFeet(ride){
  if(ride <= 400){
  return "This one is on me!";
  }
  else if (ride > 2000 && ride <= 2500){
    return 'I will gladly take your thirty bucks.';
  } 
  else if (ride > 2500) {
    return 'No can do.';
  }
  // Write your code here!
}
scuberGreetingForFeet()

function ternaryCheckCity(city){
  if(city === "NYC"){
    return 'Ok, sounds good.';
  }
  else if (city === 'Pittsburgh') {
    return 'No go.';
  }
  
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(true) {
  case tip === "generous":
    return 'Thank you so much.';

  case tip === "not as generous":
    return 'Thank you.';
  
  case tip === 'thanks for everything':
    return 'Bye.';
  }

}
//if(city === "NYC"){
 // return 'Ok, sounds good.';
//}
//else if (city === 'Pittsburgh') {
 // return 'No go.';
//}