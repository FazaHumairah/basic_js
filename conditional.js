//if
var hour = 10;

if (hour < 18) {
    console.log("Good Day");
  }
  
  //if else
var jam = 19;

  if (jam < 18) {
    console.log ("Good day");
  } 
  else {
    console.log ("Good evening");
  }
  
  //else if
var time =9;
  if (time < 10) 
{
  console.log ("Good morning");
} 
else if (time < 20) {
  console.log ("Good day");
} 
else {
  console.log ("Good evening");
}

//switch
switch (new Date().getDay()) {
    case 0:
    console.log ("Sunday");
      break;
    case 1:
    console.log ("Monday");
      break;
    case 2:
    console.log ("Tuesday");
      break;
    case 3:
     console.log ("Wednesday");
      break;
    case 4:
     console.log ("Thursday");
      break;
    case 5:
    console.log ("Friday");
      break;
    case 6:
     console.log ("Saturday");
  }
  