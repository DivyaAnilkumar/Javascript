 var heading=document.getElementById('head1');
 heading.style.color='red';
 heading.style.backgroundColor='lightblue';
 heading.style.fontSize='35px';
 heading.style.border='2px solid green';
 var para=document.getElementById('para');
 //para.innerText='This is first class of DOM';
 para.innerHTML=`<b>I am bold</b>`;
 var listitem=document.getElementsByClassName('list');
listitem[0].style.backgroundColor='red';
console.log(listitem);
var h2t=document.getElementsByTagName('h2');
h2t[0].style.backgroundColor='lightblue';
h2t[1].innerHTML=`<p>This is paragraph</p>`;
h2t[1].innerText='This is paragraph2';

var p1=document.querySelector('#para');
p1.innerText='I am styled by query selector';
let submit=document.querySelector('input[type="submit"]');
submit.value='Send';
submit.style.backgroundColor='grey';

var sec_item=document.querySelector('.list1:nth-child(2)');
sec_item.style.color='blue';

function show() {
    alert('I am Clicked');
    }

function change() {
    var item=document.getElementById('p1');
    item.style.backgroundColor='red';
    
}
function change1() {
    var item=document.getElementById('p1');
    item.style.backgroundColor='white';
    
}

function capture(event) {
    //console.log(event);
    console.log(event.target.value);
}

var keyp=document.getElementById('txtf');
keyp.addEventListener('keypress',function capture(event) {
    console.log(event.target.value);
})








 