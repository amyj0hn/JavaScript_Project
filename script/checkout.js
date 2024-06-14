//Current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Displays the addtocart in table format in checkout page
let orders = JSON.parse(localStorage.getItem('checkout'));
console.log(orders);
orders.forEach(product => {
    document.querySelector("[table]").innerHTML += `
        
        <div class="cart-items">
            <div class="row row-cols-1 row-cols-sm-6 row-cols-md-6 cart-row">
                <div class="col cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></div>
                <div class="col cart-item-name">${product.productName}</div>
                <div class="col cart-price">${product.amount}</div>
                <div class="col cart-quantity"><input quantity class="cart-quantity-input" type="number" value="1" style="width: 5rem;"  onchange="rowTotal()"></div>
                <div class="col cart-subtotal"></div>
                <div class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-x"></i></button></div>
            

            </div>
        </div>
    `;
});


// let removeCartItem = document.getElementsByClassName('btn-remove');

// for (let i = 0; i < removeCartItem.length; i++) {
//     let button = removeCartItem[i];
//     button.addEventListener('click', function (event) {
//         let buttonClicked = event.target;
//         let cartItem = buttonClicked.closest('.cart-row');
//         cartItem.remove();
//         updateCartTotal();
//         removeFromLocalStorage(cartItem);

//     });
// }

// function removeFromLocalStorage(cartItem) {
//     let cartItems = JSON.parse(localStorage.getItem('checkout'));
//     let productName = cartItem.querySelector('.cart-item-name')
//     let updatedCartItems = cartItems.filter(item => item.productName !== productName);
//     localStorage.setItem('checkout', JSON.stringify(updatedCartItems));

//     document.querySelector('.btn-remove').addEventListener('click', function () {
        
//     })
// }


// // Update the cart Total
// function updateCartTotal(){
//     let cartIemContainer = document.getElementsByClassName('cart-items')[0]
//     let cartRows = cartIemContainer.getElementsByClassName('cart-row')
//     let total = 0
//     for( let i = 0; i < cartRows.length; i++){
//         let cartRow = cartRows[i]
//         let priceElement = cartRow.querySelector('[target item price]')[0]
//         let quantityElement = cartRow.querySelector('[target item quantity]')[0]

//         let price = parseFloat(priceElement.innertext.replace('R', ''))
//         let quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     document.querySelector('.cart-subtotal')
// }

//  //Made a function called Total()
//  function rowTotal() {
//     //The  parseFloat() function converts a string representation of a number or a numerical expression into a floating-point number (a number with decimal points).
//         let itemPrice = parseFloat(document.getElementsByClassName('cart-price').textContent.substring(1));
    
//     //The .value returns the value/s that are entered or selected by the users
//         let itemQuantity = document.getElementsByClassName('cart-quantity-input').value;
    
//     // document.getElementById() gets the element by the Id that you placed within the parenthesis
//         document.getElementsByClassName('cart-subtotal').textContent = 'R' + (itemPrice * itemQuantity).toFixed(2);
//     //.toFixed() returns the decimal places
// }
//     // Made a fuction called Ordertotal()
//       function OrderTotal() {
        
//     //The  parseFloat() function converts a string representation of a number or a numerical expression into a floating-point number (a number with decimal points).
//         let subTotal = parseFloat(document.getElementsByClassName('cart-subtotal').textContent.substring(1));
    
//         let totalPrice = subTotal
//         document.getElementsByClassName('cart-total').textContent = 'R' + totalPrice.toFixed(2);
//       }





