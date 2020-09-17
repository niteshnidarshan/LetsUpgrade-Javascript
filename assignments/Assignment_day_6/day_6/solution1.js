let employees = [
    {
        name:"Thor",
        age:1500,
        city:"Asgard",
        salary:"63000"
    },
    {
        name:"Iron Man",
        age:34,
        city:"Earth",
        salary:"20000"
    },
    {
        name:"Captian America",
        age:101,
        city:"Earth",
        salary:"90000"
    }
];

function display(supperArray){
    let tableData = ""; 
    supperArray.forEach(function(employee, index){
        let currentRow = `<tr>
                <td>${index+1}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.city}</td>
                <td>$${employee.salary}</td>
                <td> 
                    <button onclick='deleteEmployee(${index})' >Delete</button>
                </td>
            </tr>`;
            tableData += currentRow; 
    });
    document.getElementsByClassName('tdata')[0].innerHTML = tableData;
}
display(employees);
function addEmployee(e){
    e.preventDefault(); //Stops clearing form during form button click
    let employee = {};

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;
    let salary = document.getElementById('salary').value;

    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;

    employees.push(employee); 

    display(employees);

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('city').value = "";
    document.getElementById('salary').value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let nameData = employees.filter(function(employee){ 
        if(employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) {
            return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        }
        else{
            return employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        }

    });
    display(nameData);
}

function deleteEmployee(index) {
    employees.splice(index,1);//from which index, how many row from index to delete
    display(employees);
}
 