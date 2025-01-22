// let user1 = "gita";
// let user2 = "dimple";
// let user3 = "rahul";
// let user4 = "prabhas";
// let user5 = "arjun";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

//let users = ["gita","dimple", "rahul", "prabhas"];

// console.log(users[0]);
// console.log(users[3]);
// for(let i = 0; i< users.length; i++){
//     console.log(users[i]);
// }
// users.map((user)=>{
//     console.log(user);

// })

// let x = users.forEach((user)=>{
//      //console.log(user);
//      return user;
// });
// console.log(x);

// //! create array of objects and print the values.

// let userDetails = {
//     name : "Gita",
//     age:20,
//     company: "Amazon",
//     sal : 85000,
//     details:function(){
//         return 'My name is ${this.name} and i am working in ${this.company}'
//     }
// };
// console.log(userDetails);
// console.log(userDetails.name);

//!create nested object and access the property of nested object

// let userDetails = {
//     name : "ramu",
//     age: 22,
//     company : "amazon",
//     sal : 910000,
//     address : {
//         city : "hyd",
//         area : {
//             areaName: "gachibowli",
//             pincode: 123456
//         }
//     }

// }
// console.log(userDetails.address.city);
// console.log(userDetails.address.area.areaName);

// let userDetails = [
//     {
//         name : "gita",
//         city: "palvancha"
//     },
//     {
//         name : "anjani",
//         city : "vijayawada"
//     },
//     {
//         name : "charan",
//         city : "kothagudem"
//     },
//     {
//         name : "priya",
//         city : "kadapa"
//     }

// ];
// userDetails.map((x)=>{
//     console.log(x.name);
// })
// console.log(userDetails[2].name);

//!JSON

// let userDetails = {
//     name :"ram",
//     age: 22,
//     city: "hyd"
// };
// console.log(userDetails);

// let x = JSON.stringify(userDetails);
// console.log("JSON object "+x);

// let y = JSON.parse(x);
// console.log(y);