/*
Object - collection of properties(features that it has) & methods(work that it has).
properties - variables
methods - functions/ behavioural
*/

//let obj = {} //literals
let avenger = {
    name: "Thor",
    age: 1500,
    weapons: ["Mjolnir","Stormbreaker", "Thunder"], //array inside object
    address: { //object inside object
        planet: "Asguard",
        home: "Apartment"
    },
    printWeapon: function(){ //function inside object
        //'this' represents the current object
        //console.log(this.weapons); 
        this.weapons.forEach(function(weapon){
            console.log(weapon);
        });
    } 
}
/*console.log(avenger);
console.log(avenger.name);
console.log(`The name is ${avenger.name} and age is ${avenger.age}.`); //use back quote to concate value with $.
console.log(avenger["name"]); //Thor
let dynamicKey = "name";
console.log(avenger.dynamicKey);//undefined - because there is no such key variable like 'dynamicKey' in avenger object.
console.log(avenger[dynamicKey]); //Thor

console.log(avenger.weapons);
avenger.weapons.forEach(function(weapon) {
    console.log(weapon);
});
console.log(avenger.address.home);

avenger.printWeapon();
*/

//Array of objects
let avengers = [
    {
        name:"Thor",
        age:1500
    },
    {
        name:"Captain America",
        age: 100
    },
    {
        name:"Ironman",
        age: 43
    }
];
/*
console.log(avengers[1]);
console.log(avengers[1].name);

for(let i=0; i<=2; i++){
    console.log(avengers[i].name);
}

avengers.forEach(function(x){
    console.log(x.name);
});

avengers.forEach((x) => {
    console.log(x.name);
});
*/

/*
doSomething = () => console.log("Hello World!");
doSomething();
*/

// doSomething = (name) => console.log("Hello World! "+name);
// doSomething("Javascript");
/*
demo = {
    name: "Laptop",
    printName: function () {
        console.log(this); //here, in normal function 'this' represents 'demo' object.
    }
};
demo1 = {
    name: "Laptop",
    printName: ()=> {
        console.log(this); //In Arrow function 'this' represents whole document(global object).
    }
};
demo.printName();
*/

// window - super class - window is an parent object provided by javascript which is the parent of all object.
// console - a child object of window.

window.console.log("Hello World!");
window.prompt()//to take input from user.
let name = prompt("Enter name");
console.log(name); 

window.confirm();

let answer = confirm("Do you want to go to Google?");
console.log(answer); //true/false
if(answer == false){
	console.log("Try others!");
}
else{
	window.location="https://www.google.co.in";	
}
// Json(Javascript object notation) - derived from javascript object

