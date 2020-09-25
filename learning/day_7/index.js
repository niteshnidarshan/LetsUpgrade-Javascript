/**
 * Timers - timers are basically a function which have ability to perform a task based on a time interval.
	It has two types as 
	1) setInterval - for infinity - executes again & again based on the time
	2) setTimeout - executes only one.
 */

/*let counter = 1;
function doTimers(){
    console.log("Jai Ram G ki");
    if(counter == 3){
        clearInterval(timer); //To stop defined timeInterval.
    }
    counter++;
}*/

//let timer = setInterval("doTimers()", 1000); //wiil execute the method on interval of 2 seconds infenite

// Or it can be written with call back function as 
/*let counters = 1;
let timers = setInterval(function(){
    console.log(counters);
    if(counters == 10) {
        clearInterval(timers);
    }
    counters++;
}, 1000);
*/

/**
 * call back function - passing function as an argument - which is getting called each & every time till data.
 * It is also called anonymous function 
 */
/*let data = [1,2,3,4];
data.forEach(function(x){ //call back function - passing function as an argument - which is getting called each & every time till data.
    console.log(x);
});
*/
/*let t = setTimeout(function(){
    console.log("Jai Ram G ki ...")
}, 3000);
//clearTimeout(t); //Optional - to terminate because setTimeout runs only once once the given time crosses.

function stopAd() {
    clearTimeout(t); //If the button clicked within 3 seocnds, t timeout will not execute
}
*/
//Date
//let currentDate = new Date();
//let currentTime = currentDate.toLocaleTimeString(); //return current local time
//document.getElementById('clock').innerHTML = currentTime;

setInterval(function(){
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString(); //return current local time
    document.getElementById('clock').innerHTML = currentTime;
},1000);