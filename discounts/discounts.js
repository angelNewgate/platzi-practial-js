const priceInput = document.querySelector("#priceInput");
const discountInput = document.querySelector("#discountInput");
const couponInput = document.querySelector("#couponInput");
const finalPriceText = document.querySelector("#finalPriceText");
const availibleCouponText = document.querySelector("#availibleCouponText");

const coupons = [
    { name: "hello", discount: 10},
    { name: "hey", discount: 20},
];

const priceWithDiscount = (price, coupon) => {
    const value = ( price * ( 100 - coupon ))/100;
    return value;
}

const calculatePrice = () => {
    const couponPrice = couponInput.value;
    const couponValue = coupons.find((e) => e.name === couponPrice);
    const pricePrice = Number(priceInput.value);
    const discountPrice = Number(discountInput.value);
    if (!couponValue) {
        const value = priceWithDiscount(pricePrice, discountPrice);
        finalPriceText.innerHTML = (`The final price is: ${value}`);
        availibleCouponText.innerHTML = (`Your coupon is not availible or you didn't use one.`);
    }
    else {
        const extraDiscount = discountPrice + couponValue.discount;
        const value = priceWithDiscount(pricePrice, extraDiscount);
        finalPriceText.innerHTML = (`The final price is: ${value}`);
        availibleCouponText.innerHTML = `You added ${couponValue.discount}% from the coupon "${couponValue.name}", therefore the total discount is ${extraDiscount}%`;
    }
}