/*
//add(10, 20); // Can call - function declaration  but not function expression here.
function add(num1, num2) {
    //Hoisting - can be allowed to call from anywhere before or after function declaration.
    //function declaration - can be allowed to call from anywhere before or after function declaration - It is called hoisting
    let result = num1+num2;
    console.log(result);
}*/
/*
const add = function(num1, num2) {
    //function expression - create function first then call it else it will throw error - Cannot access 'add' before initialization
    let result = num1+num2;
    console.log(result);
}
add(30,40);
*/

function add(num1, num2) {
    let result = num1+num2;
    return result;
}
let res = add(30,40);
console.log(res); //70

let res1 = add(30);
console.log(res1); //NaN - because second parameter of function is null.