//Current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

let container = document.querySelector('#ourStore')
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

          <div class="card" style="width: 18rem;">
          <div class="img-container">
          <img src="${product.img_url}" class="card-img-top store-img" alt="product">
          </div>
                <div class="card-body">
                <h5 class="item-text">${product.productName}</h5>
                <p class="item-name">${product.description}</p>
                    <div class="container-fluid">
                    <div class="row">
                      <div class="col">
                       <button class="col store-item-icon bi bi-cart" onclick='addToCart(${JSON.stringify(product)})'>    
                                           
                       </button> 
                        
                       <button class=" col store-item-icon bi bi-heart">                        
                       </button> 

                       
                      </div>
                    
                    </span>
                    </div>
                   </div>
                </div>
          </div>
 `
        })

    } catch (e) {
        container.textContent = "Please be patient with us as we resolve the issue"
    }
}
showProducts(products)

// Add to cart
function addToCart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Unable to add to cart")
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}

(function () {
    let buttons = document.querySelectorAll('.btn')
    let storeItems = document.querySelectorAll('.store-items')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            let filter = e.target.getAttribute('filter') // Corrected the attribute access

            storeItems.forEach((item) => {
                if (filter === 'All') {
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})()

(function () {
    let searchBox = document.querySelector('#searchProduct') // Corrected the selector
    let storeItems = document.querySelectorAll('#store-item')

    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim()

        storeItems.forEach((item) => {
            if (item.textContent.toLowerCase().includes(searchFilter)) { // Changed to lowercase before comparison
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })

    })
})()




