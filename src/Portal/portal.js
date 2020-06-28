import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  el = document.createElement("div").setAttribute("id", "portal");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
