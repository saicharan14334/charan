// console.log(10);
// console.log(20);
// setTimeout(()=>{
//    console.log(30);
// } , 5000)
// setInterval(()=>{
//     document.writeln("charan");
//     console.log(30);
// },10)
// console.log(40);
// console.log(50);

//! promise
// let p1 = new Promise((resolve, reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve, reject)=>{
//     resolve("success");
// })
// console.log(p2);
// p2.then((response)=>console.log(response))
// p2.catch((error)=>console.log(error))
// p2.finally(()=>console.log("finally for both"))
// let p3 = new Promise((resolve, reject)=>{
//      reject("failure");
// });
// console.log(p3);

//! API fetching
function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    response.then(result=>{
        //console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>{
                //console.log(user);
                store.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();