 console.log("Hello world");
   //  document.write("This is doccument write");
   //  console.warn("This is an warning");
   //  console.error("This is an error");
   //  console.clear();

    var num1 = 34;
    var num2 = 56;
    console.log(num1 + num2);
    var str1 = "This is a string";
    var str2 = "This is also string";

    console.log(str1);
    console.log(str2);

    var marks = {
      ravi : 34,
      pnk : 44,
      op : 49,
      abhi : 34
    };
    console.log(marks);

    var a = true;
    var b = false;
console.log(a,b);
var und = undefined;
var un 
console.log(un);
console.log(und);
var n  = null;
console.log(n);
//Refrence data type : Array and Object.
 var arr = [2,4,6,8,10,,"op","pnk","abhi"];
 console.log(arr);

 //operator in JavaScript
 //Arithmatic Operator
 var a = 34;
 var b=56;
 console.log(a+b);
 console.log(b-a);
 //assignment Operator
 var c = b;
 c +=b;
 console.log(c);
 c *=a;
 console.log(c);

 //Function in JS
 //do not repeat yourself

 function avg(a,b) {
   return (a + b)/2;

 }
 c1 = avg(4,6);
 c2 = avg(14,16);
 console.log(c1,c2);
 console.clear();
 //Array
 var arr = [2,4,6,8,10,12,14,16,18,20];

//  for(var i = 0;i<arr.length;i++){
//    console.log(arr[i]);
//  }
arr.forEach(function(element){
   console.log(element);
})
console.clear();
 let myArr = ["fan","camera",34,56,null,true];
 console.log(myArr.length);
 myArr.pop();
 console.log(myArr);
 myArr.push("op");
 console.log(myArr);
 myArr.shift();
 console.log(myArr);
 newLen = myArr.unshift("maurya");
 console.log(myArr);
//String Method in JS

let str3 = "op is a very good boy";
console.log(str3.length);
console.log(str3.indexOf("good"));
console.log(str3.lastIndexOf("good"));

console.log(str3.slice(1,4));

//
//document.location;
let ele = document.getElementById('click');

console.log(ele)
let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");

elemClass[0].classList.add("text-success");
console.log(ele.innerHTML);
console.log(ele.innerText)

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is created para";
tn[0].appendChild(createdElement);
document.location;
document.URL
document.scripts
document.domain

//event
//
//first event in js
// //firstContainer.addEventListener('click',function(){
//   console.log("click on container")
// })
//<div id= "firstContainer" class= "container bg-primary text-success " />

// set Time Interval
logIn =() =>{
  document.querySelectorAll('.container')[1].innerHTML = "<b> Set intervsl fired </b>"
  console.log("I am your log")
}
//set fumction  setInterval(handler: TimerHandler, timeout>: Number)
setTimeout(logIn, 2000)