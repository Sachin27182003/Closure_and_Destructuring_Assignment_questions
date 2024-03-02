

function shoppingCart (){
   let product = {
       id: "uv45679",
       name: "Fan",
       price: 4000,
       discountedPrice: 3000
   }

   let Items = [];
    return {
        getCartItems: function(){
         return {product, Items};
    },
    addToCart: function(product){
        Items.push(product)
    },
    removeItems: function(product){
        Items.pop(Items[product])
    }
}
}

const cart = shoppingCart()

//console.log("cart Items:", cart.getCartItems())

const product1 = { id: 1, name: "product1", price: 10}
const product2 = { id: 1, name: "product2", price: 10}

cart.addToCart(product1)
cart.addToCart(product2)

//console.log("cart Items:", cart.getCartItems())

cart.removeItems(2)

console.log("cart Items:", cart.getCartItems())