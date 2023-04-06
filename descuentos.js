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

if(priceInital > 1 && amountInitial >= 1 && discountInitial >= 0){
    
    const priceWithAmount = priceInital * amountInitial;
    const totalWithAmount = priceWithAmount;  

    const discountWithAmount = discountInitial
    const totalWithAmountAndDiscount = totalWithAmount*((100 - discountWithAmount)/100);

    total.innerText = '$ ' + totalWithAmountAndDiscount + ' COP';
   

} else if (priceInital > 1 && amountInitial === 0 && discountInitial > 0){ // DESCUENTO SIN CANTIDAD Y DESCUENTO
    
    const noAmount = 0;
    const priceNoAmount = priceInital * noAmount;
    const totalNoAmount = priceNoAmount;
    

    const discountNoAmount = discountInitial;
    console.log(discountNoAmount)
    const totalNoAmountAndDiscount = totalNoAmount*((100 - discountNoAmount)/100);
 
    total.innerText = '$ ' + totalNoAmountAndDiscount + ' COP';
    
}  else {// DESCUENTO SIN CANTIDAD Y SIN DESCUENTO
    
    const noAmount2 = 0;
    const priceNoAmount2 = priceInital * noAmount2;
    const totalNoAmount2 = priceNoAmount2;

    const discountNoAmount2 = 0;    
    const totalNoAmountAndDiscount2 = totalNoAmount2*((100 - discountNoAmount2)/100);
 
    total.innerText = '$ ' + totalNoAmountAndDiscount2 + ' COP';
};

// CUPONES DE DESCUENTOS

if(discountInitial > 100){
    total.innerText = 'No hay descuentos de más del 100 %'
};

const couponInitial = coupon.value;

if(!priceInital){
    total.innerText = "Escribir valores POR FAVOR!!"
    return;
};

let discountCoupon;

if(couponInitial == 'Metallica'){
    discountCoupon = 50;

    const couponMetallica = (priceInital * amountInitial * ((100-discountCoupon)/100)) * ((100-discountInitial)/100);
    total.innerText = 'El precio con el cupon de descuento es $: ' + couponMetallica;

} else if (couponInitial == 'Megadeth'){
    discountCoupon = 15;

    const couponMegadeth = priceInital * amountInitial * ((100-discountCoupon)/100) * ((100-discountInitial)/100);
    total.innerText = 'El precio con el cupon de descuento es $: ' + couponMegadeth;

} else {
    return;
};
};

     

    
