let string="   Welcome to Javascript";
let string2=string.slice(4,7);
console.log(string2);
console.log(string);
let str3=string.trim();
console.log(str3);

let str4=string.substring(2,7);
console.log(str4);

let arrnum=[1,3,5,8,4,6];
let example=arrnum.map(function(x){
    return x>4;

})
 console.log(example);