var btn= document.getElementById("shopnow")
btn.onclick=function(){
    window.location.href="index2.html"
}

$(document).ready(function() {
    const products = [
        { 
            name: "nc", 
            price: 20, 
            image: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotpendant-68887224_1024728_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
        },
        { 
            name: "Ring", 
            price: 35, 
            image: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotring-69346863_1029033_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" 
        }
    ];

    products.forEach(product => {
        $('.product-carde').append(`
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="addcart" name="${product.name}" data-price="${product.price}">Add to Cart</button>
                <button class="cancel" name="${product.name}" data-price="${product.price}">Cancel</button>
            </div>
        `);
    });
});

