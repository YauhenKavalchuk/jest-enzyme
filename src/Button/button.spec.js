import React from "react";
import Button from "./button";

describe("Button component", () => {
  it("should call onClick method", () => {
    const mockCallBack = jest.fn();
    const component = shallow(<Button onClick={mockCallBack} />);
    expect(mockCallBack.mock.calls.length).toBe(0);
    component.find(".btn").simulate("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
