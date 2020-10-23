import React from "react";
import StripeCheckout from "react-stripe-checkout";

const TakeMoney = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment been taken");
  };
  const publishibleKey =
    "pk_test_51HfSZYA1lQtORpiNnZypXc0KfsFhWwT4q35Et3uUFEtM3Zxcz8xu2Trs963VFeYXDHHtsKVnKX1PKZmsKiIxwFSI00SWZmm8oL";
  const priceStripe = price * 100;
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
