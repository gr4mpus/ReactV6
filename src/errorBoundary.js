import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught and error ", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  //   componentDidUpdate() {
  //     if (this.state.hasError) {
  //         setTimeout(() => this.setState({ redirect: true }), 5000);
  //     }
  //   }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click Here</Link> to go back to the home page or wait
          five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
