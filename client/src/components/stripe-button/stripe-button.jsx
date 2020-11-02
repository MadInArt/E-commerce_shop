import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const TakeMoney = ({ price }) => {
  const publishibleKey =
  "pk_test_51HfSZYA1lQtORpiNnZypXc0KfsFhWwT4q35Et3uUFEtM3Zxcz8xu2Trs963VFeYXDHHtsKVnKX1PKZmsKiIxwFSI00SWZmm8oL";
  const priceStripe = price * 100;
  
  const onToken = (token) => {
   axios({
     url:'payment',
     method:'post',
     data:{
       amount:priceStripe,
       token
     }
   }).then(() => {
     alert('Payment successfull')
   }).catch(error => {
     console.log('Payment error: ' , JSON.parse(error));
     alert("There was an issue during the payment. Please, be sure you use the provided credit card")
   })
   
  };

  return (
    <StripeCheckout
      name="Greenland Ltd."
      description="We are selling your healthy future"
      image="https://i.ibb.co/c2RNBsK/logo.jpg"
      panelLabel={`Your order sum is ${price}zł`}
      currency="PLN"
      amount={priceStripe}
      shippingAddress
      billingAddress
      zipCode={true}
      token={onToken}
      stripeKey={publishibleKey}
    />
  );
};
export default TakeMoney;
