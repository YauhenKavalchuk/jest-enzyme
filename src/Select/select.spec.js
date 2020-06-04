import React from "react";
import Select from "./select";
import { shallow } from "enzyme";

const setUp = (props) => shallow(<Select {...props} />);

describe("Select component", () => {
  const props = {
    options: [
      { value: "10", label: "10" },
      { value: "20", label: "20" },
    ],
    value: 10,
    handleChange: () => {},
  };

  describe("Has props", () => {
    const component = setUp(props);

    it("should render select element", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
    });

    it("should render 2 options", () => {
      const options = component.find("option");
      expect(options).toHaveLength(2);
    });
  });

  describe("Has no props", () => {
    it("should render placeholder", () => {
      const component = shallow(<Select />);
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    });
  });

  describe("defaultProps", () => {
    it("should use default handleChange", () => {
      const result = Select.defaultProps.handleChange();
      expect(result).toBe(undefined);
    });
  });
});
