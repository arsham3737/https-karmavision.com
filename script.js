let cart = [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    showCart();

}


function showCart(){

    let box = document.getElementById("cart-items");
    let total = 0;

    box.innerHTML="";


    cart.forEach((item,index)=>{

        box.innerHTML += 
        `
        <p>
        ${item.name} - ${item.price} تومان
        <button onclick="removeItem(${index})">
        حذف
        </button>
        </p>
        `;

        total += item.price;

    });


    document.getElementById("total").innerHTML=total;


}


function removeItem(index){

    cart.splice(index,1);

    showCart();

}