let products = [
    {
        name:"White T-shirt",
        size:"L",
        color:"white",
        price: 600,
        description:"Good T-shirt",
        image:"product1.jpg"
    },
    {
        name:"Yellow T-shirt",
        size:"S",
        color:"Yellow",
        price: 1600,
        description:"Good T-shirt",
        image:"product2.jpg"
    },
    {
        name:"Gray Saree",
        size:"L",
        color:"Gray",
        price: 600,
        description:"Good Saree",
        image:"product3.jpeg"
    },
    {
        name:"pink Saree",
        size:"L",
        color:"pink",
        price: 6100,
        description:"Very nice!",
        image:"product4.jpg"
    },
    {
        name:"Red Saree",
        size:"L",
        color:"red",
        price: 1600,
        description:"Good T-shirt",
        image:"product5.jpg"
    }
];

cart = [];

function displayProducts(productsData, who="productwrapper") {
    
    let productsString = ""; 
    productsData.forEach(function(product, index){ 
        let {name,image,color,description,price,size} = product;
        if(who=="productwrapper"){
                productsString += ` <div class="product"> 
                <div class="prodimg">
                <img src="shopping_images/${image}" width="100%" alt="t-shirt">
            </div>
            <h3>${name}</h3>
            <p>Price: ${price} INR</p>
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p>${description}</p>
            <p>
                <button onclick='addToCart("${index}")'>Add to cart</button>
            </p>
        </div> `;
        }
        else if(who=="cart"){
            productsString += ` <div class="product"> 
                <div class="prodimg">
                <img src="shopping_images/${image}" width="100%" alt="t-shirt">
            </div>
            <h3>${name}</h3>
            <p>Price: ${price} INR</p>
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p>${description}</p>
            <p>
                <button onclick='removeFromCart("${index}")'>Remove from cart</button>
            </p>
        </div> `;
        }
    });

    document.getElementById(who).innerHTML = productsString;
}
displayProducts(products);

function searchProduct(searchValue){
    //search name, colour & description
    //let searchValue = document.getElementById('searchValue').value;
    let searchedProducts = products.filter(function(product, index){
        let searchString = product.name+ " "+product.color+" "+product.description;
        //search by name, color & description
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
    displayProducts(searchedProducts);
}

function addToCart(index) {
    cart.push(products[index]); 
    displayProducts(cart, "cart");
}

function removeFromCart(index) {
    cart.splice(index, 1); //To delete from an array
    displayProducts(cart, "cart");
}
