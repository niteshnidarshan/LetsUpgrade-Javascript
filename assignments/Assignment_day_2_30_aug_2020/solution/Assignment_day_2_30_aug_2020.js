/*
Question 1
Program to search for a particular character in a string
*/
function searchCharacter(){
    let isKeyAvailable = false;
    let searchString = document.querySelector("#searchString").value;
    let key = document.querySelector("#searchKey").value;
     
    for(let i = 0; i<searchString.length; i++){
        if(searchString[i] === key)
            isKeyAvailable = true;
    }
    if(isKeyAvailable)
        document.getElementById("result1").innerHTML = "Available!";
    else
        document.getElementById("result1").innerHTML = "Not Available!";
}

/*
Question 2
Program to convert minutes to seconds
*/
function changeToSecond(){
    let minutes = document.querySelector("#minutes").value;
    let seconds = minutes*60; 
    if(!isNaN(minutes))
        document.getElementById("result2").innerHTML = seconds+" Seconds";
    else    
        document.getElementById("result2").innerHTML = "Enter a valid number";
}

/*
Question 3
Program to search for a element in a array of strings
*/
function searchString(){
    let isKeyAvailable = false;
    let strings = document.querySelector("#stringArray").value; 
    let key = document.querySelector("#keyString").value;
    let stringArray = strings.split(" ");
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === key)
            isKeyAvailable = true;
    }
    if(isKeyAvailable)
        document.getElementById("result3").innerHTML = "Available!";
    else
        document.getElementById("result3").innerHTML = "Not Available!";
}

/*
Question 4
Program to display only elements containing 'a' in them from a array
*/
function searchAString(){
    let availableString = "";
    let strings = document.querySelector("#stringArrays").value;  
    let stringArray = strings.split(" ");
    for(let i = 0; i < stringArray.length; i++){
         let v = stringArray[i];
         for(let j = 0; j < v.length; j++){
            if(v[j] === 'a')
                availableString = availableString + " "+v+",";
        }
    }
    document.getElementById("result4").innerHTML = availableString;
}

/*
Question 5
Print an array in reverse order
*/
function reverseString(){
    let result = " ";
    let strings = document.querySelector("#toReverse").value; 
    for(let i = strings.length-1; i >= 0; i--){
        result = result+strings[i];
    }
    document.getElementById("result5").innerHTML = result;
}