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
// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   let uname = username.value;
//   let uemail = mail.value;
//   let upass = psw.value;
//   let userDetails={
//     uname,uemail,upass
//   }
//   console.log(userDetails);
//   localStorage.setItem("userData", JSON.stringify(userDetails))

// })
// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class","topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="https://th.bing.com/th/id/OIP.q771rCm9MOkB5Bfi8j0JpgHaF7?w=245&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
// image.style.width="550px"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "Dog";
// h1.style.textAlign="center"

// let btn = document.createElement("button");
// btn.innerText="view more";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");


let gender = document.getElementsByName("gender");
// console.log(gender);
check.addEventListener("click", event=>{
  //  console.log(event.target.checked);
  if(event.target.checked == true){
    password.setAttribute("type", "text");
    show.innerText= "hidepassword";


  }else{
     password.setAttribute("type", "password");
    show.innerText= "showpassword";

  }
}
 
)

form.addEventListener("submit", event=>{
  event.preventDefault();
  let un = username.value;
  let up = password.value;
  let gen = "";

  for(let i=0;i<=gender.length-1;i++){
    // console.log(gender[i].value);
    // console.log(gender[i].checked);
    if(gender[i].checked==true){
      gen=gender[i].value;
    }
  
  }
  let userDetails= {
    username : un,
    password : up,
    gender : gen


  }
  console.log(userDetails);
  sessionStorage.setItem("userData",JSON.stringify(userDetails))

})

