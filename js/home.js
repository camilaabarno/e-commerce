let email = localStorage.getItem('email');
let emailSpan = document.getElementById("emailSpan");
let products_url = 'https://dummyjson.com/products/1';
let destacados = document.getElementById("destacados");

function showEmail() {
    console.log(email);
    if (email) {
        emailSpan.innerHTML = email;
    }
}
showEmail();

// const starTotal = 5;
//   // 2
//   let puntajeCon1Decimal = (info.products[id].rating).toFixed(1);
//   console.log("puntajeCon1Decimal:",puntajeCon1Decimal);

//   const starPercentage = (info.products[id].rating / starTotal) * 100;
//   // 3
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   // 4
//   document.querySelector(`.stars-inner`).style.width = starPercentageRounded; 
//   console.log(starPercentageRounded);


function showRecomendedProducts(data) {
    let productosAMostar = [data.products[2],data.products[18],data.products[24],data.products[22]];
    console.log(productosAMostar);
    
    for (let i = 0; i < productosAMostar.length; i++){
destacados.innerHTML +=`
<div class="producto_destacados";>

<div class="informacion_prod_container"><img class="imgRecomended" src="${productosAMostar[i].thumbnail}">
<strong><p class="prod_name">${productosAMostar[i].title} <br>
US$${productosAMostar[i].price} 
<div class="stars-outer">
<i class="far fa-star" aria-hidden="true"></i>
<i class="far fa-star" aria-hidden="true"></i>
<i class="far fa-star" aria-hidden="true"></i>
<i class="far fa-star" aria-hidden="true"></i>
<i class="far fa-star" aria-hidden="true"></i>
  <div class="stars-inner" id=${i}>
  <i class="fa fa-star" style="color:rgb(108, 143, 255);" aria-hidden="true"></i>
  <i class="fa fa-star" style="color:rgb(108, 143, 255);" aria-hidden="true"></i>
  <i class="fa fa-star" style="color:rgb(108, 143, 255);" aria-hidden="true"></i>
  <i class="fa fa-star" style="color:rgb(108, 143, 255);" aria-hidden="true"></i>
  <i class="fa fa-star" style="color:rgb(108, 143, 255);" aria-hidden="true"></i>
  </div>
</div>
</p></strong>
<p class="prod_discount ">${productosAMostar[i].discountPercentage}% OFF</p></div>
</div>`
        const starTotal = 5;
        // 2
        let puntajeCon1Decimal = (productosAMostar[i].rating).toFixed(1);
      
        const starPercentage = (puntajeCon1Decimal / starTotal) * 100;
        // 3
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        // 4
        document.getElementById(`${i}`).style.width = starPercentageRounded; 
        console.log(starPercentageRounded);

}}

fetch('https://dummyjson.com/products/').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    showRecomendedProducts(data);
});