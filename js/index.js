
function calculateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

document.querySelector('.calculate-total').onclick = function (e) {
  calculateAll();
};

function calculateAll() {
  let total = 0;
  let allProducts = document.getElementsByClassName('product');
  for (let product of allProducts) {
    total += calculateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = total;
}

