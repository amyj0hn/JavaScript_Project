//Current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

let container = document.querySelector('#ourStore')
let productSearch = document.querySelector('#search-item')
let sortingByAmount = document.querySelector('[sortingByPrice]')
let sortingByCategory = document.querySelector('[sortByCategory]')
let Ascending = document.querySelector('[Ascending]')
let products = JSON.parse(
    localStorage.getItem('products')) ? JSON.parse( localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                id: 1,
                productName: "BlueHandbag",
                category: "Crossbags",
                description: "medium bag suitable to hold all necessities.",
                amount: 150,
                img_url: "https://amyj0hn.github.io/project-images/images/bag.jpg"
            },
             {
                id:2,
                productName: "BrownHandbag",
                category: "Crossbags",
                description: "handbag comes with a matching wallet.",
                amount: 200,
                img_url: "https://amyj0hn.github.io/project-images/images/bag-with-wallet.jpg"          
            },
              {
                id:3,
                productName: "PurseHandbag",
                category: "Crossbags",
                description: "purse handbag with a gold linked chain sling.",
                amount: 250,
                img_url: "https://amyj0hn.github.io/project-images/images/purse-handbag.webp"
              },
                {
                    id:4,
                productName: "SlingBag",
                category: "Crossbags",
                description: "handbag with scarf",
                amount: 200,
                img_url: "https://amyj0hn.github.io/project-images/images/slingbag.jpg"
             },
              {
                id:5,
                productName: "Black Purse",
                category: "Crossbags",
                description: "black purse with gold chain",
                amount: 120,
                img_url: "https://amyj0hn.github.io/project-images/images/blackpurse.jpg"
    
         },
    
         {
            id:6,
            productName:"Candy Shoulder Bag",
            category:"Crossbags",
            description:"Candy colored shoulder bag will have you `popping!`",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/candy-color-sholder-bag.png"
    
        },
    
        {
            id:7,
            productName:"Shoulder Bag with Purse",
            category:"Crossbags",
            description:"This cute bag comes with a matching purse",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/sholder-bag-with-purse.jpg"
    
        },
    
        {
            id:8,
            productName:"Snakeskin Slingbag",
            category:"Crossbags",
            description:"Feeling expensive? try our new snakeskin slingbag",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/snake-skin-slingbag.webp"
    
        },
    
        {
            id:9,
            productName:"Leather Slingbag",
            category:"Crossbags",
            description:"A leather slingbag, perfect for everyday use",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/Telena-Leather-Sling-Bag.webp"
    
        },
    
        {
            id:10,
            productName:"Two-toned purse",
            category:"Crossbags",
            description:"Stylish two-toned purse, suitable for any occassion",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/two-toned-purse.webp"
    
        },
    
        {
            id:11,
            productName:"Rhinestone Handle bag",
            category:"Crossbags",
            description:"Luxurious pink bag with rhinestone handle",
            amount:"120",
            img_url:"https://amyj0hn.github.io/project-images/images/rhinestone-handle-bag.webp"
        }
        ]))

// items/products 
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || []
    // ? JSON.parse(localStorage.getItem('checkout'))
    // : []



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
                <p class="item-name price">${product.amount}</p>
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
        container.innerHTML += 
        `
    <div class="hourglassBackground">
        <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
      </div>
    </div>
        `
        setTimeout(() => {
            location.reload()
        },
        2000
    )
    }
}
showProducts(products)


// // Add to cart
// function addToCart(product) {
//     try {
//         let existingItem = checkoutItems.find(product => product.id == productName);

//         if (existingItem) {
//             // If item already exists, update its quantity
//             existingItem.quantity++;
            
//         } else {
//             // If item doesn't exist, add it to the cart
//             product.quantity = 1;
//             checkoutItems.push(product);
//         }

//         localStorage.setItem('checkout', JSON.stringify(checkoutItems));
//         document.querySelector('[counter]').textContent = checkoutItems.length;
//     } catch (e) {
//         alert("Unable to add to cart");
//     }
// }

// window.onload = () => {
//     document.querySelector('[counter]').textContent = checkoutItems.length || 0
// }


// // function addToCart(product) {
// //     try {
// //         let existingItem = checkoutItems.find(item => product.id === product.productName);

// //         if (existingItem) {
// //             // If item already exists, update its quantity
// //             existingItem.quantity++;
// //         } else {
// //             // If item doesn't exist, add it to the cart
// //             product.quantity = 1;
// //         checkoutItems.push(product)
// //         }
// //         localStorage.setItem('checkout', JSON.stringify(checkoutItems))
// //         document.querySelector('[counter]').textContent = checkoutItems.length || 0
// //     } catch (e) {
// //         alert("Unable to add to cart")
// //     }
// // }
// // window.onload = () => {
// //     document.querySelector('[counter]').textContent = checkoutItems.length || 0
// // }

// //Filter buttons
// (function () {
//     let buttons = document.querySelectorAll('.btn')
//     let storeItems = document.querySelectorAll('.store-items')
//     buttons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             let filter = e.target.getAttribute('filter') // Corrected the attribute access

//             storeItems.forEach((item) => {
//                 if (filter === 'All') {
//                     item.style.display = 'block'
//                 } else {
//                     if (item.classList.contains(filter)) {
//                         item.style.display = 'block'
//                     } else {
//                         item.style.display = 'none'
//                     }
//                 }
//             })
//         })
//     })
// })()

// // Search product name
// productSearch.addEventListener('keyup', ()=>{
//     if(productSearch.value !="") {
//         let searchItem = products.filter( product=>{
//             return product.productName.toLowerCase().includes(productSearch.value)
//         })
//         showProducts(searchItem)
//     }

// })

// // Sort by price
// sortingByAmount.addEventListener('click', ()=>{
    
//         let filterByAmount = products.sort( (a, b)=> a.amount - b.amount)
//         showProducts(filterByAmount)
    
// })

// // Sort by category
// sortingByCategory.addEventListener('click', ()=>{
    
//     let sortedByCategory = products.category.sort( (a, b)=> a.amount - b.amount)
//     showProducts(sortedByCategory)

// })
