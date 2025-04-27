const cartIcon = document.querySelector("#icon-cart");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
})
cartClose.addEventListener("click", () => {
    cart.classList.remove("active");
})




const addCartBtn = document.querySelectorAll(".add-cart");
addCartBtn.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    })
})



const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const pImg = productBox.querySelector("img").src;
    const pTitle = productBox.querySelector(".product-title").textContent;
    const pPrice = productBox.querySelector(".price").textContent;


    const cartItems = cartContent.querySelectorAll(".cart-img");
    for (let item of cartItems) {
        if (item.src === pImg) {
            alert("This item is already in the cart.")
            return;
        }
    }



    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
     <img src="${pImg}" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${pTitle}</h2>
                    <span class="cart-price">${pPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>
                    </div>
                </div>
                <i class="fa fa-trash cart-remove"></i>`;
    cartContent.appendChild(cartBox);
    cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
        cartBox.remove();
    })
}

