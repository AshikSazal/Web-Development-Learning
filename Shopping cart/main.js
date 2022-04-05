let carts=document.querySelectorAll(".add-cart");

let products=[
  {name: 'Grey Shirt', tag: 'greyshirt', price:15, inCart:0},
  {name: 'Black Shirt', tag: 'blackshirt', price:20, inCart:0},
  {name: 'White Shirt', tag: 'whiteshirt', price:25, inCart:0},
  {name: 'Blue Shirt', tag: 'blueshirt', price:35, inCart:0}
];

for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click',()=>{ // calling function
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}
function onLoadCartNumber(){
  let productNumbers=localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent=productNumbers;
  }
}


function cartNumbers(product) {
  let productNumbers=localStorage.getItem('cartNumbers');
  productNumbers=parseInt(productNumbers);
  if(productNumbers){ //2nd or more time clicking
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.cart span').textContent=productNumbers+1;
  }
  else {// first time clicking
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
  }
  setItems(product);
}


function setItems(product){

  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems);// object convert to json object

  if(cartItems!=null){//2nd or more time adding product

    if(cartItems[product.tag]==undefined){
      cartItems={
        ...cartItems,//adding previous product
        [product.tag] : product//adding new product
      }
    }
    cartItems[product.tag].inCart += 1; // count the number of particular selected product
  }
  else {// first time adding product
    product.inCart = 1;
    cartItems={
      [product.tag] : product
    }
  }


  localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}


function totalCost(product){

  let cartCost = localStorage.getItem('totalCost');


  console.log("my cart cost is ",cartCost);
  console.log(typeof cartCost);

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost',cartCost+product.price);
  }
  else {
    localStorage.setItem('totalCost',product.price);
  }

}

function displayCart(){

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost=localStorage.getItem('totalCost');

  console.log(cartItems);

  if(cartItems && productContainer){

    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      // use backtick key
      productContainer.innerHTML += `
        <div class="product">
          <i class="fas fa-times-circle"></i>
          <img src="./image/${item.tag}.jpg" height="100" width='100'>
          <span>${item.name}</span>
        </div>
        <div class="price">$${item.price}</div>
        <div class="quantity">
          <i class="fas fa-chevron-circle-left"></i>
          <span>${item.inCart}</span>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div class="total">
          $${item.inCart * item.price}.00
        </div>
      `
    });

    productContainer.innerHTML +=`
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Basket Total
        </h4>
        <h4 class="basketTotal">
          $${cartCost}.00
        </h4>
    `;

  }

}


displayCart();
onLoadCartNumber();
