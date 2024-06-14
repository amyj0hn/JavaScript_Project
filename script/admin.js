//Current year
document.querySelector("[currentYear]").textContent =
  new Date().getUTCFullYear();

// Retrieve products from localStorage
let products = JSON.parse(localStorage.getItem("products") || []);

let table = JSON.parse(localStorage.getItem("products") || "[]");
console.log(table);

if (table) {
  table.forEach((product) => {
    document.querySelector("[table]").innerHTML += `
            
            <tr >
              <td class="cart-item-image"><img src="${product.img_url}" alt="product" style="width: 6rem;"></td>
              <td class="cart-item-name">${product.productName}</td>
            <td class="cart-desciption">${product.description}</td>
              <td class="cart-price" price>${product.amount}</td>
              <td class="col cart-edit"><button class="btn-edit" data-bs-target="#editProductModal" data-bs-toggle="modal" type="button"><i class="bi bi-pencil-square"></i></button></td>
              <td class="col cart-remove"><button class="btn-del" type="reset" ><i class="bi bi-trash3"></i></button></td>
            </tr>
        `;
  });
} else {
  console.log("No products found in localStorage.");
}

let addProductModal = document.getElementById("addProductModal");
let addProductForm = addProductModal.querySelector("form");

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = document.getElementById("productName").value;
  let description = document.getElementById("description").value;
  let amount = document.getElementById("amount").value;
  let img_url = document.getElementById("img_url").value;

  const newProduct = {
    id: products.length + 1,
    productName,
    description,
    amount,
    img_url,
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  // Close the modal
  addProductModal.classList.remove("show");
  addProductModal.setAttribute("aria-hidden", "true");
});

// Get all delete buttons
let deleteButtons = document.querySelectorAll(".btn-del");

// Add event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Get the product ID from the button's parent element
    let productId =
      button.parentNode.parentNode.querySelector(".cart-item-name").textContent;

    // Find the product in the products array
    let productIndex = products.findIndex(
      (product) => product.productName === productId
    );

    // Remove the product from the products array
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
    }

    // Update local storage
    localStorage.setItem("products", JSON.stringify(products));

    // Remove the product from the page
    button.parentNode.parentNode.remove();
  });
});

// Get all edit buttons
let editButtons = document.querySelectorAll('.btn-edit');

// Add event listener to each edit button
editButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the product ID from the button's parent element
    let productId = button.parentNode.parentNode.querySelector('.cart-item-name').textContent;

    // Find the product in the products array
    let productIndex = products.findIndex((product) => product.productName === productId);

    // Get the product object
    let product = products[productIndex];

    // Open the edit modal
    let editModal = document.getElementById('editProductModal');
    editModal.classList.add('show');
    editModal.setAttribute('aria-hidden', 'false');

    // Populate the edit form with the product's information
    let editForm = editModal.querySelector('form');
    editForm.querySelector('#editProductName').value = product.productName;
    editForm.querySelector('#editDescription').value = product.description;
    editForm.querySelector('#editAmount').value = product.amount;
    editForm.querySelector('#editImgUrl').value = product.img_url;
  });
});

// Add event listener to the edit form submit button
let editForm = document.getElementById('editProductModal').querySelector('.form');
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the updated product information from the edit form
  let productName = editForm.querySelector('#editProductName').value;
  let description = editForm.querySelector('#editDescription').value;
  let amount = editForm.querySelector('#editAmount').value;
  let img_url = editForm.querySelector('#editImgUrl').value;

  // Update the product object in the products array
  let productIndex = products.findIndex((product) => product.productName === productName);
  products[productIndex].productName = productName;
  products[productIndex].description = description;
  products[productIndex].amount = amount;
  products[productIndex].img_url = img_url;

  localStorage.setItem('products', JSON.stringify(products));

  editModal.classList.remove('show');
  editModal.setAttribute('aria-hidden', 'true');
});