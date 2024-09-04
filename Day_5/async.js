//Asynchronous Programming- mutithreaded,nonblocking,increased throughput
//setInterval - every interval task perform
setInterval(()=>{
    console.log('Hi');
},3000)
console.log('I am after setInterval');
//setTimeout
setTimeout(()=>{
    console.log('hello');
},8000)
console.log('I am after setTimeout');
//asynchronous methods of execution
//callback
//Before callback
var p=document.getElementById('result');
// function add(a,b) {
//     sum=a+b;
//     return sum;
// }

// function show(s) {
//     console.log(sum);
//     p.innerText=`The sumof two numbers is ${s}`;
    
// }
// add(7,4);
// show(sum);

//After Callback
// function addsum(a,b,callbac){
//     var sum=a+b;
//     callbac(sum);
// }
// function display(val) {
//     p.innerText=`The sum  of two numbers is ${val}`;
    
// }
// addsum(22,3,display);
//callback hell-multiple callbacks loops
//promise -avoid callback hell
function addsum(a,b){
    return new Promise(function(resolve,reject){
        var sum=a+b;
        if(sum>50){
            resolve(sum);
        }
        else{
            reject(sum);
        }
    })
}
//then -resolve and catch-reject
// addsum(22,2).then((val)=>{
//     p.innerText=`The sum is ${val}`;
// }).catch((err)=>{
//     p.innerText=`The sum =${err}`;
// })

//Async-await - avoid promise multiple .then and .catch code

async function display() {
    try {
        const data=await addsum(23,5);
        p.innerText=`The sum is ${data}`;
    } catch (error) {
        p.innerText=`The sum is ${error}`;
    }
   
}
//display();
async function products() {
    const data = await fetch(' https://dummyjson.com/products');
    const fin_data=await data.json();
    console.log(fin_data);
}
products();