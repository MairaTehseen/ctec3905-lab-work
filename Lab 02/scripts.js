let mycount = 0;
function greetMe() {
  alert("Hello!");
  myTrigger.textcontent= `myCount ${myCount}`;
}

myTrigger.addEventListener('dblclick' , greetMe);
