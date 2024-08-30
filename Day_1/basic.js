console.log('Welcome to Javascript');
//variable declaration
//var a=9;
//console.log(a);
let b=22;
console.log(b);
const c=88;
b=90;
{
    var a=20;
    let b=80;
    console.log(b);
    
}
//console.log(a);
console.log(typeof(b));
//datatypes
let firstName='Diya';
console.log(typeof(firstName));
var booleanVariable= true;
 console.log(typeof(booleanVariable));
 let unKnown;
 console.log(typeof(unKnown));
 var secondVariable=null;
 console.log(typeof(secondVariable));

 let arr=[23,24,55,'krishna'];
 console.log(arr[2]);
 console.log(arr.length);
 arr.push(88);
 console.log(arr);
 arr.pop();
 console.log(arr);
 //Javascript Objects
 let person={
    fName:'Maya',
    age:20,
    gender:'Female'
 }
 console.log(person);
 console.log(person.age);

 //Second object
 let car= new Object();
 car.model='i10';
 car.color='grey';
 car.company='Hyundai';
 console.log(car);

 //Array of objects
 let arr_obj=[{fName:'Diya',age:22},{fName:'Meera',age:24}];
 console.log(arr_obj[1].fName);
 //Operators
 var d=5;
 d+=3;
 console.log(d);

//prefix
 let t=90;
 //let t1=++t;
 //console.log(t1);
 console.log(t);
 let s=90;
 if (t==s) {
    console.log('Yes it is');
    
 } else if(t>s){
    console.log('t is greater than s');
    
 }
 else{
    console.log('t is less than s');
 }

 //Functions
 function add_s(s,t) {
    var result=s+t;
    //console.log('Result is '+result);
    return result;
    }
  var sum=add_s(5,4);
  console.log('Result is '+sum);



  function sub_s(s,t) {
    var result=s-t;
    
    return result;
    }
  var diff=sub_s(5,4);
  console.log('Result is '+diff);

  //Loops
  for (let i = 1; i <11; i++) {
    console.log(i);
    }

for (const key in car) {
    console.log(car[key]);
    
}
for (const item of arr) {
    console.log(item);
    
}
//while loop
 var i=1;
while (i<11) {
    
   console.log(i); 
   i++;
    
}
var j=1;
do {
    console.log(j);
    j++;
} while (j<=10);