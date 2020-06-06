import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Button.defaultProps = {
  label: "Button",
};

export default Button;
