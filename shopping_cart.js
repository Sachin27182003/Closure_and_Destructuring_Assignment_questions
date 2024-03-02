

function shoppingCart (){
   let product = {
       id: "uv45679",
       name: "Fan",
       price: 4000,
       discountedPrice: 3000

   }
    return {
        getCartItems: function(){
         return product;
    }}
}

const cart = shoppingCart()
//console.log(cart())
console.log("cart Items:", cart.getCartItems())