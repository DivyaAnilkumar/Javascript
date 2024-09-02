var email=document.getElementById('email');
var pwd=document.getElementById('password');
// function validate() {
//     if(email.value=='' || pwd.value==''){
  //          alert("Fields are empty");

//     }else if(pwd.value.length<6){
  //  alert("length is not valid");
//}else{
  //  alert("Forms submitted");
//}
// }


var error1=document.getElementById('err1');
var error2=document.getElementById('err2');
//for email validation
let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2})?$/
let regex1=/^([A-Za-z0-9]{8,})$/

function validate() {
    // if (regex.test(email.value)) {
    //     error1.innerText="Email is valid";
    //     error1.style.color="green";   
    //     return true; l

    
    //  else {
    //     error1.innerText="Email is invalid";
    //     error1.style.color="red";
    //     return false;
    // }
    if(regex1.test(pwd.value)) {
        error2.innerText="Password valid";
        error2.style.color="green";
        return true;
        
    }
    else{
        error2.innerText="Password invalid";
        error2.style.color="red";
        return false;
    }
    
}
//Exception Handling
//throw creates custom errors
var er1=document.getElementById('error')
function show() {
    try {
        alerrt('Hi I am here'); 
    } catch (error) {
        er1.innerText=error;
    }
   
}

