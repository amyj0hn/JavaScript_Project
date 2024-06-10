//Current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

let container = document.querySelector('[ourStore]')
let productSearch = document.querySelector('[searchProduct]')
let sortingByAmount = document.querySelector('[sorting]')
let products = JSON.parse(
    localStorage.getItem('products'))

// items/products 
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []

//Products
function showProducts(args) {
    container.innerHTML = ""
    try {
        args.forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">
                            <span class="shadow text-success fw-bold">Amount</span>
                            R${product.amount}
                        </p>
                        <button type='button' class="btn" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                    </div>
                </div>
            `
        })

    } catch (e) {
        container.textContent = "Please be patient with us as we resolve the issue"
    }
}
showProducts(products)


