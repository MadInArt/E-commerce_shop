import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const CheckouPaymentsAlert = styled.div`
  color: red;
  text-align: center;
  margin-top: 5px;
  font-size: 23px;
`;
