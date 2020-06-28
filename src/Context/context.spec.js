import React from "react";
import { AuthProvider } from "./context";
import ContextComponent from "./component";

describe("ContextComponent component", () => {
  const component = mount(
    <AuthProvider>
      <ContextComponent />
    </AuthProvider>
  );

  it("should toggle login status", () => {
    expect(component.find("div").text()).toBe("false");
    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("true");

    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("false");
  });
});
