import React from "react";
import { AuthProvider } from "./context";
import ContextComponent from "./component";

describe("ContextComponent component", () => {
  it("should toggle login status", () => {
    const component = mount(
      <AuthProvider>
        <ContextComponent />
      </AuthProvider>
    );

    expect(component.find("div").text()).toBe("false");
    component.find(".btn").simulate("click");
    expect(component.find(".text").text()).toBe("true");

    component.find(".btn").simulate("click");
    expect(component.find(".text").text()).toBe("false");
  });
});
