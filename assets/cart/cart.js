// json list
const products = [
    {
        id: 1,
        title: "مانیتور 1",
        price: 1000,
        image: "/assets/images/sabad/asus3.png"
    },

    {
        id: 1,
        title: "گیم کنترولر",
        price: 1000,
        image: "/assets/images/sabad/car-02 (1).webp"
    },

    {
        id: 1,
        title: "مانیتور 2",
        price: 1000,
        image: "/assets/images/sabad/hp2.png"
    },

    {
        id: 1,
        title: "گوشی موبایل",
        price: 1000,
        image: "/assets/images/sabad/mobile02.jpg"
    }
]

const productList = document.getElementById("products_list")

// show products
products.forEach(product => {
    const div = document.createElement("div")
    div.className = "product"
    div.innerHTML = `
    <img width="100%" src=${product.image} alt="${product.title}">
    <div class="product_title">${product.title}</div>
    <div class="product_price">${product.price}</div>
    <button class="add_btn">افزودن به سبد</button>
    `
    productList.appendChild(div)
})

// handle adde product to cart
productList.addEventListener("click", function(e) {
    if (e.target.classList.contains("add_btn")) {
        console.log(e.target);
        const id = Number(e.target.dataset.id)

        addToCart(id)
    }
})

// add to cart
function addToCart(productId) {
    const id = cart.find(p => p.id === productId)
    if(!id) return


}

const cart = []

// remove handle
function removement(productId) {
    const index = cart.findIndex(i => i.id === productId)
    if (index !== -1) {
        cart.splice(index, 1)
    }

    renderCart()
}

// show in cart
function renderCart() {
    const cartList = document.getElementById("cart_list")
    cartList.innerHTML = ""

    products.forEach(item => {
        const li = document.createElement("li")
        li.className = "cart_item"
        li.innerHTML = `
        <div class="">${item.title}</div>
        <div>
        <span>*${item.qty}</span>
        <button class="remove_btn">حذف</button>
        </div>
        `
    })

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    document.getElementById("cart_total").textContent = `تومان ${total.toLocaleString()} جمع:`
}

cart
