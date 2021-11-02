function calculateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  console.log(price);
  console.log(quantity);
  let subtotal = price * quantity;
  console.log(subtotal);

  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

document.querySelector('.calculate-total').onclick = function (e) {
  calculateAll();
};

function calculateAll() {
  let allProducts = document.getElementsByClassName('product');
  for (let product of allProducts) {
    calculateSubtotal(product);
  }
}
