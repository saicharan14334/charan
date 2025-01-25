// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);
  //!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tamato"
// //!spread operator:- it will takeout each and every value from the original array
// //! and store it inside one more new array(pure array).
// //? syntax :- []
// let x = [...ele];
// console.log(x, Array.isArray(x));
// x.map(element=>{
//     //console.log(element);
//     element.style.backgroundColor="orange"
// })
// let ele =document.querySelector('#mru');
// console.log(ele);
// let ele =document.querySelector('#mru');
// // console.log(ele);
// let ele =document.querySelectorAll('.test');
// console.log(ele);
// let btn = document.querySelector('#btn');
// btn.addEventListener("click",()=>{
//     console.log("buttonclicked")

// // })
// let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
// []
// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// ele.id = "demo";
// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image);
let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  let uname = username.value;
  let uemail = mail.value;
  let upass = psw.value;
  let userDetails={
    uname,uemail,upass
  }
  console.log(userDetails);
  localStorage.setItem("userData", JSON.stringify(userDetails))

})

