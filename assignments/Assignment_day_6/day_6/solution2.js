

window.onload = function(){ 
    //On load - first time
    let init_buses = [];
    if(localStorage.getItem("buses") == null) {
        let stringBuses = JSON.stringify(init_buses);
        localStorage.setItem("buses", stringBuses);
    }
}

function displayBus(supperArray=undefined){
    let tableData = ""; 
    let buses;
    if(supperArray==undefined){
        buses = JSON.parse(localStorage.getItem("buses")) 
    }
    else{
       buses = supperArray; 
    }
    buses.forEach(function(bus, index){
        let currentRow = `<tr>
                <td>${index+1}</td>
                <td>${bus.name}</td>
                <td>${bus.source}</td>
                <td>${bus.destination}</td>
                <td>${bus.bus_number}</td> 
                <td>${bus.total_capacity}</td> 
            </tr>`;
            tableData += currentRow; 
    });
    document.getElementsByClassName('bus_tdata')[0].innerHTML = tableData;
}
displayBus();
function addBus(e){
    e.preventDefault(); //Stops clearing form during form button click
    let bus = {};

    let name = document.getElementById('bus_name').value;
    let source = document.getElementById('source').value;
    let destination = document.getElementById('destination').value;
    let bus_numbers = document.getElementById('busNumber').value;
    let total_capacity = document.getElementById('capacity').value;

    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.bus_number = bus_numbers;
    bus.total_capacity = total_capacity;

    let buses = JSON.parse(localStorage.getItem("buses"));

    buses.push(bus); 

    localStorage.setItem("buses", JSON.stringify(buses));

    displayBus();

    document.getElementById('bus_name').value = "";
    document.getElementById('source').value = "";
    document.getElementById('destination').value = "";
    document.getElementById('busNumber').value = "";
    document.getElementById('capacity').value = "";
}

function searchBySource() {
    let search_Value = document.getElementById("searchBus").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let name_Data = buses.filter(function(b){  
        if(b.source.toUpperCase().indexOf(search_Value.toUpperCase()) != -1) {
            return (b.source.toUpperCase().indexOf(search_Value.toUpperCase()) != -1);
        }
        else{
            return (b.destination.toUpperCase().indexOf(search_Value.toUpperCase()) != -1);
        }

    });
   displayBus(name_Data);  
}
 
 