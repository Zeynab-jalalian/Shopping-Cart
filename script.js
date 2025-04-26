const cartIcon=document.querySelector("#icon-cart");
const cart=document.querySelector(".cart");
const cartClose=document.querySelector("#cart-close");

cartIcon.addEventListener("click",()=>{
cart.classList.add("active");
})
cartClose.addEventListener("click",()=>{
    cart.classList.remove("active");
})