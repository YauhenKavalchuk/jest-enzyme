import React from "react";
import Counter from "./counter";

const setUp = () => shallow(<Counter />);

describe("Count component", () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should render Counter component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Counter handlers", () => {
    it("should change count value to plus 1", () => {
      const btn = component.find(".plusOneBtn");
      btn.simulate("click");
      // expect(component).toMatchSnapshot();
      expect(component.state().count).toBe(1);
    });

    it("should reset count value to 10", () => {
      const btn = component.find(".resetBtn");
      btn.simulate("click");
      expect(component.state().count).toBe(10);
    });

    it("should reset count value to custom value", () => {
      instance.handleReset(20);
      expect(component.state().count).toBe(20);
    });
  });
});
