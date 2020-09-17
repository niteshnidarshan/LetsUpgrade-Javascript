function showModal(index) {
    //e - represents 'event' from html method call
    //console.log(e); //prints all related event properties
    
    //onclick of button it should show modal div
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';

    copySuperHero(index);
}

function hideModal(event) { 
    //console.log(event.target.className);
    if(event.target.className == 'modal'){
        let modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'none'; 
    }
}

