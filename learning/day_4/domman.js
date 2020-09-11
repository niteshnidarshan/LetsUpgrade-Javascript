
/**
 * Day_4 starts ...
 * 
 * DOM Manipulation
 * ------------------------
 * Fetching elements
 * Manipulate text, html & CSS
 * Work with attributes & inputs
 *
 * show password
 * popups
 * 
 */

 /**
  * Fetch elements by Tags, Id & querySelector
 */
 /*
 const paragraph = document.getElementsByTagName('p'); //Always returns array
 console.log(paragraph);
 console.log(paragraph[1]);

 const para = document.getElementsByClassName('english');
 console.log(para);
 console.log(para[1]);

const elemById = document.getElementById('hindi');
console.log(elemById);

const querySelect = document.querySelector("p"); //Will fetch only first element
const querySelect1 = document.querySelector(".english"); //Will fetch only first element of same class
const querySelect2 = document.querySelectorAll("p"); //will fetch all p
const querySelect3 = document.querySelectorAll("#hindi"); //will fetch all id - 'hindi' 
console.log(querySelect);
console.log(querySelect1);
console.log(querySelect2);
console.log(querySelect3); 
*/

/**
 * innerText - can fetch & change also
 */
/*
const paras = document.getElementsByClassName("english");
let changeFirstP = paras[1].innerText ////fetching text from tag
console.log(changeFirstP); 
paras[1].innerText = "Jai Ram G ki"; //Will change tag value in HTML page on browser.
*/

function doSomething(){
    //const paras = document.getElementsByClassName("english");
    //let changeFirstP = paras[1].innerText ////fetching text from tag
    //paras[1].innerText = "Jai Ram G ki! ..."; //Will change second 'p' value in HTML page.
    
    //const valueChange = document.getElementById("data");
    //valueChange.innerText =  "<h1>Changing to - Jai Ram G ki...</h1>";//Will treat as simple text
    //valueChange.innerHTML = "<h1>Changing to - Jai Ram G ki...</h1>"; // Will treat as Html component
    
    //change image by changing source.
    //const ele = document.getElementById("image"); 
    //const newImg = "movie_poster/lootcase.jpg"; 
    //ele.src = newImg; //Chenages src of img tag.
}

function textButton() {
    const ele = document.getElementsByClassName("name"); 
    console.log(ele[0].value);
}
