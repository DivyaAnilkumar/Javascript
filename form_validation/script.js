const username=document.getElementById('name1');
var phn=document.getElementById('phone');
var pwd=document.getElementById('password');
var error1=document.getElementById('err1');
var error2=document.getElementById('err2');
var error3=document.getElementById('err3');

let regex1=/^([A-Za-z]+)$/;
let regex2=/^([0-9]+)$/;
let regex3=/^([A-Za-z0-9]+)$/;

function validate(event) {
    // let isValid = false;
    if(regex1.test(username.value)){
        event.preventDefault();
        error1.innerText="Name is valid";
        error1.style.color="green";
        return true;

    }
    else{
        error1.innerText="Name is invalid";
        error1.style.color="red";
        return false; 
    }

    // if(regex2.test(phn.value)){
    //     error2.innerText="Phone number is valid";
    //     error2.style.color="green";
    //     isValid=true;

    // }
    // else{
    //     error2.innerText="Phone number is invalid";
    //     error2.style.color="red";
        
    // }

    // if(regex3.test(pwd.value)){
    //     error3.innerText="Password is valid";
    //     error3.style.color="green";
    //     isValid=true;

    // }
    // else{
    //     error3.innerText="Password is invalid";
    //     error3.style.color="red";
        
    // }

    // return isValid;
    
}