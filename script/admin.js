//Current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Retrieve products from localStorage
let products = JSON.parse(localStorage.getItem('products') || [])

// let table = JSON.parse(localStorage.getItem('products'));
// console.log(table);
// table.forEach(products => {
//     document.querySelector("[table]").innerHTML += `
        
//         <div class="cart-items">
//             <di class="row row-cols-1 row-cols-sm-6 row-cols-md-6 cart-row">
//                 <div class="col cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></div>
//                 <div class="col cart-item-name">${product.productName}</div>
//                 <div class="col cart-price" price>${product.amount}</div>
//                 <div class="col cart-quantity"><input class="cart-quantity-input" type="number" value="1" style="width: 5rem;" "></div>
//                 <div class="col cart-subtotal"> 
//                 </div>
//                 <div class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-x"></i></button></div>
//             </div>
//         </div>
//     `;
// });

let table = JSON.parse(localStorage.getItem('products') || '[]'); 
console.log(table);

if (table) { // Check if table is not null
    table.forEach(product => {
        document.querySelector("[table]").innerHTML += `
            
            <tr >
              <td class="cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></td>
              <td class="cart-item-name">${product.productName}</td>
              <td class="cart-price" price>${product.amount}</td>
              <td class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-pencil-square"></i></button></td>
              <td class="col cart-remove"><button class="btn-remove" type="button"><i class="bi bi-trash3"></i></button></td>
            </tr>
        `;
    });
} else {
    console.log("No products found in localStorage.");
}
