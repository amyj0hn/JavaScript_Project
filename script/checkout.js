//Current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Displays the addtocart in table format in checkout page
let orders = JSON.parse(localStorage.getItem('checkout'));
console.log(orders);
orders.forEach(product => {
    document.querySelector("[table]").innerHTML += `
        
        <div class="cart-items">
            <di class="row row-cols-1 row-cols-sm-6 row-cols-md-6 cart-row">
                <div class="col cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></div>
                <div class="col cart-item-name">${product.productName}</div>
                <div class="col cart-price" price>${product.amount}</div>
                <div class="col cart-quantity"><input class="cart-quantity-input" type="number" value="1" style="width: 5rem;" "></div>
                <div class="col cart-subtotal"> 
                </div>
                <div class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-x"></i></button></div>
            </div>
        </div>
    `;
});


let removeCartItem = document.getElementsByClassName('btn-remove');

// Convert removeCartItem to an array and use forEach method
Array.from(removeCartItem).forEach(button => {
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        let cartItem = buttonClicked.closest('.cart-row');
        let itemName = cartItem.querySelector('.cart-item-title').textContent;

        // Remove item from localStorage
        let storedItems = JSON.parse(localStorage.getItem('checkout')) || [];
        let updatedItems = storedItems.filter(item => item.name !== itemName);
        localStorage.setItem('checkout', JSON.stringify(updatedItems));

        // Remove item from the cart interface
        cartItem.remove();
        updateCartTotal();
    });
});


// Update the cart Total
// function updateCartTotal() {
//     let cartItemContainer = document.querySelector('.cart-items');
//     let cartRows = cartItemContainer.querySelectorAll('.cart-row');
//     let total = 0;

//     // Iterate over each cart row using forEach method
//     cartRows.forEach(cartRow => {
//         let priceElement = cartRow.querySelector('.cart-price');
//         let quantityElement = cartRow.querySelector('.cart-quantity');
//         let price = parseFloat(priceElement.textContent.replace('R', ''));
//         let quantity = parseInt(quantityElement.value);
//         total += price * quantity;
//     });

//     document.querySelector('.cart-subtotal').textContent = 'R' + total.toFixed(2);
//     OrderTotal(); 
// }




// Made a fuction called Ordertotal()
function OrderTotal() {
    let subTotal = parseFloat(document.querySelector('.cart-subtotal').textContent.substring(1));
    let totalPrice = subTotal;
    document.querySelector('.cart-total').textContent = 'R' + totalPrice.toFixed(2);
}

let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
document.querySelector('[counter]').textContent = checkoutItems.length || 0;


 


// When the quantity changes the subtotal changes as well.
let quantityInputs = document.querySelectorAll('.cart-quantity-input');
quantityInputs.forEach((input,index) => {
    input.addEventListener('change', () => {
        let cartRows = document.querySelectorAll('.cart-subtotal');
        cartRows.forEach((row, spot) => {
            if (index == spot) {
                let price = document.querySelectorAll("[price]")
                price.forEach((value, numspot) => {
                    if (spot == numspot) {
                        console.log((+value.textContent) * (+input.value));
                        row.innerHTML = 'R' + (+value.textContent) * (+input.value)
                    }
                } )
                
            } 
        })
        


        // Convert NodeList to Array
        // Array.from(cartRows).forEach(cartRow => {
        //     let priceElement = cartRow.querySelector('.cart-price');
        //     let quantityElement = cartRow.querySelector('.cart-quantity-input');
    
        //     let itemPrice = parseFloat(priceElement.textContent.substring(1));
        //     let itemQuantity = parseInt(quantityElement.value);
    
        //     let subtotal = itemPrice * itemQuantity;
        //     cartRow.querySelector('.cart-subtotal').textContent = 'R' + subtotal.toFixed(2);
        // });
    });
});







