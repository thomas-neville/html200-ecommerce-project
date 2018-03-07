var cart = [];

// Add item to cart
function addToCart(item){
  event.preventDefault()
  
  // add item to cart array, let user know the item was added, console log which item is added and console log total items in cart
  cart.push(item)
  alert("Added " + item + " to your cart.")
  console.log("Added " + item + " to your cart.")
  console.log(cart.length)
}

// Remove item from cart
function removeFromCart(item){
  event.preventDefault()
  
  // var for item in array
  var i = cart.indexOf(item)
  
  // if the item is in the array, remove it and alert the user the item was removed
  // also console log that the item was removed from cart
  // if not alert the user that the item is not in their cart
  // console log total items in the cart
  if(i >= 0){
    cart.splice(i, 1)
    alert("Removed " + item + " from your cart.")
    console.log("Removed " + item + " from your cart.")
  } else {
    alert("This item is not in your cart.")
  }
  console.log(cart.length)
}