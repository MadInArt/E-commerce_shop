import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart-action";

const TakeMoney = ({ price, history, clearCart }) => {
  const publishibleKey =
    "pk_test_51HfSZYA1lQtORpiNnZypXc0KfsFhWwT4q35Et3uUFEtM3Zxcz8xu2Trs963VFeYXDHHtsKVnKX1PKZmsKiIxwFSI00SWZmm8oL";
  const priceStripe = price * 100;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceStripe,
        token,
      },
    })
      .then(() => {
        Swal.fire({
          text: "Payment successfull",
          icon: "success",
          confirmButtonColor: "black",
        });
        history.push("/");
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          text:
            "There was an issue during the payment. Please, be sure you use the provided credit card.",
          icon: "error",
          confirmButtonColor: "black",
        });
      });
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
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(TakeMoney);
