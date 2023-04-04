const price = document.querySelector('#price');
const amount = document.querySelector('#amount');
const discount = document.querySelector('#discount');
const coupon = document.querySelector('#coupon');
const button = document.querySelector('#button');
const total = document.querySelector('.full-record');

button.addEventListener('click',calcularDescuento );

function calcularDescuento(){

    const priceInital = Number(price.value);
    const amountInitial = Number(amount.value);
    const discountInitial = Number(discount.value);


// DESCUENTO CON CANTIDAD Y DESCUENTO

if(priceInital > 1 && amountInitial > 0 && discountInitial >= 0){
    
    const priceWithAmount = priceInital * amountInitial;
    const totalWithAmount = priceWithAmount;  

    const discountWithAmount = discountInitial
    const totalWithAmountAndDiscount = totalWithAmount*((100 - discountWithAmount)/100);

    total.innerText = '$ ' + totalWithAmountAndDiscount + ' COP';
   

} else if (priceInital > 1 && amountInitial === 0 && discountInitial > 0){ // DESCUENTO SIN CANTIDAD Y DESCUENTO
    
    const noAmount = 1;
    const priceNoAmount = priceInital * noAmount;
    const totalNoAmount = priceNoAmount;
    

    const discountNoAmount = discountInitial;
    console.log(discountNoAmount)
    const totalNoAmountAndDiscount = totalNoAmount*((100 - discountNoAmount)/100);
 
    total.innerText = '$ ' + totalNoAmountAndDiscount + ' COP';
    
} else {// DESCUENTO SIN CANTIDAD Y SIN DESCUENTO
    
    const noAmount2 = 1;
    const priceNoAmount2 = priceInital * noAmount2;
    const totalNoAmount2 = priceNoAmount2;

    const discountNoAmount2 = 0;    
    const totalNoAmountAndDiscount2 = totalNoAmount2*((100 - discountNoAmount2)/100);
 
    total.innerText = '$ ' + totalNoAmountAndDiscount2 + ' COP';
};

// ANUNCIO SOBRE DESCUENTOS

if(discountInitial > 100){
    total.innerText = 'No hay descuentos de más del 100 %'
};
};
     



    



    
