import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error_boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
          <ErrorImageText>
            Sorry for the bad experience, the developer who made it will be
            fired soon.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
