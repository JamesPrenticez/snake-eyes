import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it("renders the loading text", () => {
    const { getByText } = render(<Loading />);
    const loadingText = getByText("Loading");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders with custom text", () => {
    const { getByText } = render(<Loading text="Please wait" />);
    const customText = getByText("Please wait");
    expect(customText).toBeInTheDocument();
  });

  it("renders in full screen when 'fullScreen' prop is true", () => {
    const { container } = render(<Loading fullScreen />);
    const loadingContainer = container.firstChild;
    expect(loadingContainer).toHaveStyle("position: absolute");
    expect(loadingContainer).toHaveStyle("top: 0");
    expect(loadingContainer).toHaveStyle("left: 0");
    expect(loadingContainer).toHaveStyle("height: 100vh");
  });
  
  // This test is width and height prop on the svg element
  // not a css property like the test above the utilises .toHaveStyle()
  it("renders with custom height and width", () => {
    const { container } = render(<Loading height="200px" width="300px" />);
    const svgElement = container.querySelector("svg");
  
    if (svgElement != null ) {
      expect(svgElement.getAttribute("height")).toBe("200px");
      expect(svgElement.getAttribute("width")).toBe("300px");
    }
  });
});