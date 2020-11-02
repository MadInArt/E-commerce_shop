import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./loading_spinner.styles";

const LoadingSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
   return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default LoadingSpinner;
