let products = [
    {
        productId:"101",
        name:"White T-shirt",
        size:"L",
        color:"white",
        price: 600,
        description:"Good T-shirt",
        image:"product1.jpg"
    },
    {
        productId:"102",
        name:"Yellow T-shirt",
        size:"S",
        color:"Yellow",
        price: 1600,
        description:"Good T-shirt",
        image:"product2.jpg"
    },
    {
        productId:"103",
        name:"Gray Saree",
        size:"L",
        color:"Gray",
        price: 600,
        description:"Good Saree",
        image:"product3.jpeg"
    },
    {
        productId:"104",
        name:"pink Saree",
        size:"L",
        color:"pink",
        price: 6100,
        description:"Very nice!",
        image:"product4.jpg"
    },
    {
        productId:"105",
        name:"Red Saree",
        size:"L",
        color:"red",
        price: 1600,
        description:"Good T-shirt",
        image:"product5.jpg"
    },
    {
        productId:"106",
        name:"linen Saree",
        size:"S",
        color:"pink",
        price: 1890,
        description:"Awesome Saree",
        image:"product6.jpeg"
    },
    {
        productId:"107",
        name:"Linen Cotton Mix Saree",
        size:"L",
        color:"yellow",
        price: 2600,
        description:"A saree which will u love!",
        image:"product7.jpg"
    },
    {
        productId:"108",
        name:"Pure Silk Saree",
        size:"L",
        color:"black",
        price: 7600,
        description:"Saree of Silk material.",
        image:"product8.jpg"
    },
    {
        productId:"109",
        name:"Fancy Saree",
        size:"S",
        color:"Orange",
        price: 2600,
        description:"A fancy saree in cotton material!",
        image:"product9.jpg"
    },
    {
        productId:"110",
        name:"Bridal work Saree",
        size:"L",
        color:"cool pink",
        price: 10600,
        description:"Fancy saree - party wear!",
        image:"product10.jpg"
    },
    {
        productId:"111",
        name:"Fancy cotton Saree",
        size:"S",
        color:"red",
        price: 600,
        description:"Fancy Saree",
        image:"product11.jpg"
    },
    {
        productId:"112",
        name:"Fancy Cool Saree",
        size:"L",
        color:"red",
        price: 3600,
        description:"Fancy red saree",
        image:"product12.jpg"
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

function filterProduct() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let filterProduct = products.filter(function(product, index){
        let price = product.price; 
        if(price >= min && price <= max){
            return product;
        } 
    });
    displayProducts(filterProduct);
}

function addToCart(index) { 
    if(isProductAvailableInCart(products[index].productId)=="no"){
        cart.push(products[index]);  
        displayProducts(cart, "cart");
        
        document.getElementById("cart_size").innerHTML = "   [total items: "+cart.length+"]";
    }
    else{
        //alert("Product already available in your cart.");
        showModal("Product already available in your cart.")
        return false;
    }
}

function removeFromCart(index) { 
    cart.splice(index, 1); //To delete from an array
    displayProducts(cart, "cart");
    document.getElementById("cart_size").innerHTML = "   [total items: "+cart.length+"]";
}
function isProductAvailableInCart(productId){ 
    let answer = "no";
    cart.forEach(function(product){
        if(product.productId == productId){
            answer = "yes"; 
        }
    });
    return answer;
}

