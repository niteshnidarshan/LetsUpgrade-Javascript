function showPassword(){
    const eles = document.getElementsByClassName("input");
    eles[1].type = "text"; 

    let btnImg = document.getElementById("btn-img");
    btnImg.src = "https://cdn1.iconfinder.com/data/icons/ios7-essence/22/hide-view-eye-hidden-512.png";
}
function hidePassword(){
    const eles = document.getElementsByClassName("input");
    eles[1].type = "password";
    let btnImg = document.getElementById("btn-img");
    btnImg.src = "https://banner2.cleanpng.com/20180409/geq/kisspng-computer-icons-eye-clip-art-eye-5acb3e384aa5c4.4631413615232691763058.jpg";
}