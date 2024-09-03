// function ajaxreq() {
//     var xhttp=new XMLHttpRequest();//Create XHR Object
//     xhttp.onreadystatechange=function () {
//         if(this.readyState==4 && this.status==200){
//             document.getElementById('dataset').innerHTML=this.responseText;
//         }
//     }





//     xhttp.open("GET","data.json",true);
//     xhttp.send();
// }
// "use stict"
// a=10;
// console.log(a);
// delete a;
var str='This is a string';
console.log(str.length);
console.log(str.indexOf('str'));
console.log(str.replace('string','sentence'));
console.log(str);
console.log(str.split(' '));
// console.log(str.splice);
// console.log(str.trim());
// console.log(str.substring());

//Array Operations
//forEach()-modifies the original array
var arr=[23,45,60,22,12]
// arr.forEach(function(item,ind,arr2){
//     arr2[ind]=item>50;
//     console.log(item);
// })
// console.log(arr);

//filter()-does not modiies the original array
var arr2=arr.filter(function(item){
    return item>50;
})
console.log(arr2);
console.log(arr);

//array map function
//JSON
let person={
    name:"Maya",
    age:22
}
console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

//ECMAScript 6

// function display(fname,lname) {
//     // console.log('My name is '+fname);
//     alert(`My name is ${fname} ${lname}`);  //template literal
    
// }

//Arrow functions
var display=(fname,lname)=>{
    alert(`My name is ${fname} ${lname}`); 
}
var add=(num1,num2)=>{
    sum=num1+num2;
    console.log(sum);
}
// add(5,4);

