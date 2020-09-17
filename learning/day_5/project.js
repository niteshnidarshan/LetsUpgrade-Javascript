let superheroes = [
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

function display(supperArray){
    let tableData = ""; 
    supperArray.forEach(function(superhero, index){
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
display(superheroes);
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

    superheroes.push(superhero); 

    display(superheroes);

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('planet').value = "";
    document.getElementById('height').value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let newData = superheroes.filter(function(superhero){
        return (
            superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 //returns -1 means no such value in the object 
        );
    });
    display(newData);
}

function deleteSuperHero(index) {
    superheroes.splice(index,1);//from which index, how many row from index to delete
    display(superheroes);
}

let updateIndex;

function copySuperHero(index) {
    //copying to modal page

    updateIndex = index;

    let superhero = superheroes[index];
     
    let name = document.getElementById('upd_name').value = superhero.name;
    let age = document.getElementById('upd_age').value = superhero.age;
    let planet = document.getElementById('upd_planet').value = superhero.planet;
    let height = document.getElementById('upd_height').value = superhero.height;
}

function updateSuperHero(e) {
    e.preventDefault(); //Stops clearing form during form button click
    let superhero = superheroes[updateIndex];

    let name = document.getElementById('upd_name').value;
    let age = document.getElementById('upd_age').value;
    let planet = document.getElementById('upd_planet').value;
    let height = document.getElementById('upd_height').value;

    superhero.name = name;
    superhero.age = Number(age);
    superhero.planet = planet;
    superhero.height = height;
  
    display(superheroes); 

    //To hide model on update click 
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
}