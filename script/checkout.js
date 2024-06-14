let checkoutTotal = document.querySelector("[checkoutTotal]");

//Current year
document.querySelector("[currentYear]").textContent =
  new Date().getUTCFullYear();

// window.onload = () => {
// // document.querySelector("[counter]").textContent = checkoutItems.length || 0;
// // };

// Displays the addtocart in table format in checkout page
let orders = JSON.parse(localStorage.getItem("checkout"));
console.log(orders);
orders.forEach((product) => {
  document.querySelector("[table]").innerHTML += `
        <div class="cart-items" >
            <div class="row row-cols-1 row-cols-sm-6 row-cols-md-6 cart-row">
                <div class="col cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></div>
                <div class="col cart-item-name">${product.productName}</div>
                <div class="col cart-price" price>${product.amount}</div>
                <div class="col cart-quantity"><input quantity class="cart-quantity-input" type="number" value="1" style="width: 5rem;"></div>
                <div class="col cart-subtotal" subtotal> </div>
                <div class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-x"></i></button></div>
            </div>
        </div>
    `;
  let subtotal = product.amount * 1;
  document.querySelectorAll("[subtotal]")[
    document.querySelectorAll("[subtotal]").length - 1
  ].innerHTML = `<p> R ${subtotal.toFixed(2)} </p>`;

  let totalCheckoutValue = 0;
  document.querySelectorAll("[subtotal]").forEach((subtotal) => {
    totalCheckoutValue += parseFloat(subtotal.textContent.substring(1));
  });

  checkoutTotal.innerHTML = `<span>R ${totalCheckoutValue.toFixed(2)}</span>`;

});

// Display the total checkout value

let removeCartItem = document.getElementsByClassName("btn-remove");

document.querySelectorAll("[quantity]").forEach((input, inputIndex) => {
  input.addEventListener("change", () => {
    document.querySelectorAll("[price]").forEach((value, index) => {
      if (inputIndex === index) {
        let sub = +value.textContent * +input.value;
        document.querySelectorAll("[subtotal]").forEach((output, position) => {
          if (position == index) {
            output.innerHTML = `<p sub> R ${sub.toFixed(2)} </p>`;
          }
        });
      }
    });

    let answer;
    let grand = []
    document.querySelectorAll("[subtotal]").forEach((cost, index) => {
        grand.push(+cost.textContent.slice(2,))
        answer = grand.reduce((a,b) => a+b)
    })
    document.querySelector("[checkoutTotal]").innerHTML = `<p>Total: R ${answer} </p>`
  });
});

let answer;
let grand = []
document.querySelectorAll("[subtotal]").forEach((cost, index) => {
    grand.push(+cost.textContent.slice(2,))
    answer = grand.reduce((a,b) => a+b)
})

console.log(typeof answer);
document.querySelector("[checkoutTotal]").innerHTML = `<p>Total: R ${answer} </p>`

for (let i = 0; i < removeCartItem.length; i++) {
  let button = removeCartItem[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    let cartItem = buttonClicked.closest(".cart-row");
    cartItem.remove();
    removeFromLocalStorage(cartItem);
  });
}

function removeFromLocalStorage(cartItem) {
  let cartItems = JSON.parse(localStorage.getItem("checkout"));
  let productName = cartItem.querySelector(".cart-item-name").textContent;
  let updatedCartItems = cartItems.filter(
    (item) => item.productName !== productName
  );
  localStorage.setItem("checkout", JSON.stringify(updatedCartItems));

 
}
