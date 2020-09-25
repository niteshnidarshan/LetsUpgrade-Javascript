/**
 * Fetch API
 * Its like AJAX in javascript
 * //fetch() returns promise
 * https://jsonplaceholder.typicode.com/users
 */
/*
 //get request 
 fetch("https://jsonplaceholder.typicode.com/users")//by default get request
 .then(response=>{
     //console.log(response);//returns  with 
     //console.log(response.json());//return promises
     response.json().then((data)=>{//If anything returns promise use 'then' & 'catch'
         console.log(data);
     });
 })
 .catch((err)=>{
    console.log(err);
})
*/
//post request
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "post",
  body: JSON.stringify({
    name: "Nidarshan",
    username: "nitesh"
  }), 
  headers:{//headers are extra information as metadata 
    "Content-Type":"application/json"
  }
}).then(response=>{
    //console.log(response.json());
    response.json().then(data=>{
        console.log(data);
    });
});