// console.log("js-start-output");
// console.warn("js-end-warning");
// console.error("js-start error");

str1="hello";
str2="abcd";
var n1=24;
var n2=3;
// console.log("add is:",n1+n2);
// console.log("prdct is:",n1*n2);
// console.log("sub is:",n1-n2);
// console.log("division is:",n1 / n2);
// console.log(n1==n2);
// console.log(n1>=n2);
// console.log(n1<=n2);


// console.log(true&&true);
// console.log(false&&true);
// console.log(false&&false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// logical not 

// console.log(!false);
// console.log(!true);


// document.write("hello");


// objects
// var ma=
// {
//     a:2,b:3,c:4,d:5,e:5
   
// }

// var a=true;
// var b=false;
// var x;
// var y =null;
// console.log(str1);
// console.log(str2);
// console.log(n1);
// console.log(n2);
// console.log(ma);
// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);

// var array = [1,2,3,4,5,6,7,8,9,10,11];

// console.log(array);
// console.log(array[0],array[1]);

// var array_combined = [1,"asdf",3,4,5,6,7,8,9,10,11];
// console.log(array_combined);
// console.log(array_combined[1]);





// function avg(a,b)
// {
//     return(a+b)/2;
// }
// c1=avg(2,3);
// c2=avg(20,30);
 
// console.log(c1);
// console.log(c2);




// var x=12;

// if(x<2)
// {
//     console.log("a");
// }


// else if(x<20)
// {
//     console.log("b");
// }

// else
// {
//     console.log("c");
// }

// var a=[1,2,3,4,5,6,7,8,9,10,11];

// console.log(a)
// for(var i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }


// a.forEach(function(element)
// {
// console.log(element)

// })

 

// const ac=0; // cant be changed value;

// let j=0;

// while (j<a.length)
// {
//     console.log(a[j]);
//     j ++;
// }


// array  methods

// let arr = [1,"a",null,true,3,"b"];

// console.log(arr.pop());
// console.log(arr.push("c"));
// console.log(arr.shift());// removes 1st element
// console.log(arr.unshift("a"));// add  element at 1st pos.

// console.log(arr)


// string methods

// let s ="a b c d e f g h c";
// console.log(s.indexOf("c"));
// console.log(s.length);
// console.log(s.lastIndexOf("c"));
// console.log(s.slice(0,5));
// console.log(s.replace("a","b"));


// dates

// let date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
// console.log(date.getFullYear());
// console.log(date.getDay()); 
// console.log(date.getHours()); 




// DOCUMENT OBJECT MANIPULATION:
// document.getElementById('click').click()

// let elem=document.getElementById('click');
// console.log(elem);

let elem=document.getElementsByClassName('container');
// console.log(elem[0]);
// elem[1].style.background= "red";

// elem[0].classList.add("primary");

// console.log(elem[0].innerHTML);
// console.log(elem[ 0].innerText);

// tn=document.getElementsByTagName('div')
// console.log(tn[1].innerHTML);

// createelement_PARA= document.createElement('p');
// createelement_PARA.innerText="child_created"
// tn[1].appendChild(createelement_PARA);

// createelement_DIV= document.createElement('div');
// createelement_DIV.innerText="child_created"
// tn[1].appendChild(createelement_DIV);


// createelement_bold= document.createElement('b');
// createelement_bold.innerText="replaced_created_bold"
// tn[1].replaceChild(createelement_bold,createelement_PARA);


// // removeChild(createelement_PARA);
 
// sel=document.querySelector('.container');
// console.log(sel);

// sel_ALL=document.querySelectorAll('.container');
// console.log(sel_ALL);
setInterval(() =>{
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
a= new Date()

    let date =a.toLocaleDateString();
    let day=weekDay[a.getDay()];
let time=a.getHours() + ":"+a.getMinutes() + ":"+a.getSeconds();


document.getElementById('time').innerHTML="<u><b>Date</b></u><br />"+date +"<br /><br />"+"<u><b>Time</b></b></u><br />"+time+"<br />"+"<br /><u>DAY</u><br />"+day},1000);