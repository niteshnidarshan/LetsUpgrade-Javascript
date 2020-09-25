/**
 * Ajax - Asynchronous javascript and XML
 * --------------------------------------------
 * - By default javascript is a single threaded language & it works as synchronous means everything gets executed line by line.
 * - So one particular task execution in middle has to wait till his above tasks completeds.
 * 
 * - Every task which is running in background are Asynchronous tasks
 * setTimeout() is an asynchronous function - it does wait to complete other tasks.
 * Ajax is also an asnchronous function which not let others to wait.
 * 
 */

 //async e.g.
 /*console.log("Hello");
    setTimeout(function(){console.log("new");},10000);
 console.log("World");//did not wait for setTimeout finish
 for(var i=0; i<5000; i++){
     console.log(i);
 }
console.log("wait over!");
*/

//$.ajax() //provided by jQuery
//https://jsonplaceholder.typicode.com/ - a fake rest api
/*$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "get",
    success: function(data){
         console.log(data);
    }
});
*/
let users = [
    {name:"Nidarshan", age:25}, 
    {name:"Ram G", age:27}, 
    {name:"Laxman G", age:27}
];

let user;
/*function getUserData(callback) {
    setTimeout(function(){
        user = users.filter(function(u){
            return u.age == 27;
        });
        callback();
        //return user;
    }, 2000); //executes after 3 seconds - asychronous execution
} 
function updateUser() { 
    //This function does not wait for 3 second, if not use callback function 
    //let response = getUserData();
    //console.log(response);
    console.log(user);
} 
//getUserData(updateUser());
//or
getUserData(function(){
    //user[0].name = "Jai Ram G ki"
    console.log(user);
});
//Now first update name then age
function updateName() {
    setTimeout(function(){
        user[0].name = "Ramchandra G";
    }, 3000);
    console.log(user[0]);
}
getUserData(updateName); //If no parameter associated in callback function, no need to use parenthesis.
*/
//problem : If some dependent tasks are there then it has to create that much of callback of functions & code bomes messy.
//solution: promises - It replaces the callback methods; Here need to consider either a task is completed or not completed. 
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            user = users.filter(function(u){ 
                return (u.age == 27);
            });
            if(user.length >= 1){
                resolve(user);
            }
            else{
                reject("User was not found!");
            }
        }, 2000); //executes after 3 seconds - asychronous execution
    });
} 
// getUserData().then((res)=>{//then - if success/ resolve
//     console.log(res[0]);
// }).catch(error => {//If rejects
//     console.log(error);
// });
function updateUser(user) {
    return new Promise((resolve, reject) => {
        user.name="Ramchandra G!";
        resolve(user);
    });
}
getUserData().then((res)=>{//then - if success/ resolve
    updateUser(res[0]).then((res1)=>{
        console.log(res1);
    })
}).catch(error => {//If rejects from any of the callback - this single catch can handle all
    console.log(error);
});
function updateAge(user) {
    return new Promise((resolve, reject) => {
        user.age="37";
        resolve(user);
    });
}
//another way
async function callEverything() {//when it has any asynchronous task inside the function, use async keyword, so that the function statments execution behaves asynchronously(one by one execution)
   //await waits till the execution completes. Here no need to use 'then'
   let response = await getUserData();//asynchronous task 
   console.log(response);
   let user = await updateUser(response);
   console.log(user);
   let age = await updateAge(user);
   console.log(age);
}
callEverything();

