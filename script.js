/* java script for date and time */
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

/* array contains a special for each day of the week */
const specials = ["Honey Roasted Ribs", "Rosemary Chicken", "Prime Rib Steak", "Lobster Tail", "Beef Brisket", "Pulled Pork", "Pork Sausage Links"];

/* function to retrieve day of the week and daily special from array */
function getSpecial(){
  return specials[datetime.getDay()]
}

/* insert daily special on index page */
document.getElementById("dSpecial").textContent = getSpecial();

/* array for happy hour function */
const happyStrings = ["It's Sunday and it's passed 6pm! It's happy hour!", "It's not Sunday and it's not passed 6pm! It's not happy hour yet!"];

/* determine if it's happy hour */
function getHappy(){
  let x = 0;
  if (datetime.getDay() < 6 && datetime.getHours() < 17){
    x = 1;
  } else {
    x = 0;
  }
  return happyStrings[x];
}

/* insert happy hour message */
document.getElementById("hHour").textContent = getHappy();
