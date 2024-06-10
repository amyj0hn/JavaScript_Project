// Create products and store on local storage
let wrapper = document.querySelector('[recentProducts]')
let products = JSON.parse( localStorage.getItem('products')) ? JSON.parse( localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
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

     }
    ]
))