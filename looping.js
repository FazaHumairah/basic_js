//looping for
for (let i = 0; i < 5; i++) {
   document.write( "Nomornya adalah " + i + "<br>");
}

//for in
const person={fname:"Jeon", lname:"Hyeza", age:19};
let text = "";
for (let x in person) {
  console.log (person[x]);
}

//for...of loop
const arr = ['Anggur', 'Mangga', 'Naga'];
for (let buah of arr) {
console.log(buah);
}

//looping while
let s=7
while (s < 10) {
    console.log ("The number is " + s);
    s++;
  }
  
  //do while
  o=5
  do {
    text += ("The number is " + o);
    o++;
  }
  while (o < 10);