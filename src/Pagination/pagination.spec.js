import React from "react";
import Pagination from "./pagination";

const setUp = (props) => shallow(<Pagination {...props} lastPage={20} />);

describe("Pagination component", () => {
  it("should render Pagination without props", () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination with props", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination for last pages", () => {
    const component = setUp({ page: 15 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination without 3dots in the middle", () => {
    const component = setUp({ page: 16 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination with 3dots and 3 buttons in the end", () => {
    const component = setUp({ page: 19 });
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onChange", () => {
      const result = Pagination.defaultProps.onClick();
      expect(result).toBe(undefined);
    });
  });
});
