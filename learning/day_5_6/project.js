window.onload = function(){
    //On load - first time
    let init_superheroes = [
        {
            name:"Thor",
            age:1500,
            planet:"Asgard",
            height:"6.3"
        },
        {
            name:"Iron Man",
            age:34,
            planet:"Earth",
            height:"5.10"
        },
        {
            name:"Captian America",
            age:101,
            planet:"Earth",
            height:"6.9"
        }
    ];
    if(localStorage.getItem("superheroes") == null) {
        let stringSuperHeroes = JSON.stringify(init_superheroes);
        localStorage.setItem("superheroes", stringSuperHeroes);
    }
}

function display(superArray=undefined){
    let tableData = "";  
    let superheroes;
    if(superArray == undefined){
        superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object
    }
    else {
        superheroes = superArray;
    }
    
 
    superheroes.forEach(function(superhero, index){
        let currentRow = `<tr>
                <td>${index+1}</td>
                <td>${superhero.name}</td>
                <td>${superhero.age}</td>
                <td>${superhero.planet}</td>
                <td>${superhero.height}</td>
                <td>
                    <button onclick='showModal(${index})' >Update</button>
                    <button onclick='deleteSuperHero(${index})' >Delete</button>
                </td>
            </tr>`;
            tableData += currentRow; 
    });
    document.getElementsByClassName('tdata')[0].innerHTML = tableData;
}
display();
function addSuperHero(e){
    e.preventDefault(); //Stops clearing form during form button click
    let superhero = {};

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let planet = document.getElementById('planet').value;
    let height = document.getElementById('height').value;

    superhero.name = name;
    superhero.age = Number(age);
    superhero.planet = planet;
    superhero.height = height;

    //get data from locastorage & convert it from string to object with JSON.parse()
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object

    //setting new row to superheores object
    superheroes.push(superhero);  
    //convert object to string & store in localStorage 
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
    
    display();

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('planet').value = "";
    document.getElementById('height').value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    //get data from locastorage & convert it from string to object with JSON.parse()
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object
 
    let newData = superheroes.filter(function(superhero){
        return (
            superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 //returns -1 means no such value in the object 
        );
    });
    display(newData);
}

function deleteSuperHero(index) {
    //get data from locastorage & convert it from string to object with JSON.parse()
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object
 
    superheroes.splice(index,1);//from which index, how many row from index to delete
    display(); 

    //convert object to string & store in localStorage 
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
}

let updateIndex;

function copySuperHero(index) {
    //copying to modal page

    updateIndex = index;

    //get data from locastorage & convert it from string to object with JSON.parse()
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object
      
    let superhero = superheroes[index];
     
    let name = document.getElementById('upd_name').value = superhero.name;
    let age = document.getElementById('upd_age').value = superhero.age;
    let planet = document.getElementById('upd_planet').value = superhero.planet;
    let height = document.getElementById('upd_height').value = superhero.height;
}

function updateSuperHero(e) {
    e.preventDefault(); //Stops clearing form during form button click
    //get data from locastorage & convert it from string to object with JSON.parse()
    let superheroes = JSON.parse(localStorage.getItem("superheroes"));// converting to object
     
    let superhero = superheroes[updateIndex];

    let name = document.getElementById('upd_name').value;
    let age = document.getElementById('upd_age').value;
    let planet = document.getElementById('upd_planet').value;
    let height = document.getElementById('upd_height').value;

    superhero.name = name;
    superhero.age = Number(age);
    superhero.planet = planet;
    superhero.height = height;



    //convert object to string & store in localStorage 
    localStorage.setItem("superheroes", JSON.stringify(superheroes));
  
    display(); 

    //To hide model on update click 
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
}