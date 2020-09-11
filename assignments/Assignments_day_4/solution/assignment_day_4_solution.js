function myImage(){
    const sol_1 = document.getElementById("sol_1");
    sol_1.src = "/movie_poster/don.jpeg";
}
function changeImage(){
    const sol_1 = document.getElementById("sol_1");
    sol_1.src = "/movie_poster/malang.jpeg";
}
function againChangeImage(){
    const sol_1 = document.getElementById("sol_1");
    sol_1.src = "/movie_poster/lagan.jpeg";
}
function copyText(){
    const source = document.getElementById("source");
    const target = document.getElementById("target");
    target.value = source.value;
}

let persons = [
    {
        name: "Ram",
        age:27,
        country:"India",
        hobbies:["Swimming", "Reading", "Archiary"]
    },
    {
        name: "Laxman",
        age:27,
        country:"India",
        hobbies:["Swimming", "Reading", "Archiary"]
    },
    {
        name: "Nitesh",
        age:31,
        country:"India",
        hobbies:["Swimming", "Photography"]
    },
    {
        name: "Nidarshan",
        age:32,
        country:"USA",
        hobbies:["Swimming", "Photography"]
    }
];

function showAllObjects(){
    persons.forEach(
        (obj) => {
            console.log(obj);
        }
    );
}

function showAgeObj(){
    persons.forEach(
        (obj) => {
            if(obj.age > 30){
                console.log(obj);
            }
        }
    );  
}

function showIndiaObj(){
    persons.forEach(
        (obj) => {
            if(obj.country == "India"){
                console.log(obj);
            }
        }
    );
}
