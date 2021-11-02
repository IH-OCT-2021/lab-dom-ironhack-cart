function calculateSubtotal(product){
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value
  console.log(price)
  console.log(quantity)
  let subtotal = price*quantity
  console.log(subtotal)
  return subtotal
}

document.querySelector('.calculate-total').onclick = function (e) {
  console.log()
calculateSubtotal(document)
}