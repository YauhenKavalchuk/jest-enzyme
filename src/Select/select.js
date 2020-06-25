import React from "react";
import PropTypes from "prop-types";

const Input = ({ handleChange, options, value }) => (
  <div className="selectWrapper">
    {options.length > 0 ? (
      <>
        <select onChange={handleChange} defaultValue={value}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <span className="selectText">per page</span>
      </>
    ) : (
      <div className="placeholder">"No items"</div>
    )}
  </div>
);

Input.propTypes = {
  handleChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.number,
};

Input.defaultProps = {
  handleChange: () => 'Test',
  options: [],
  value: 0,
};

export default Input;
