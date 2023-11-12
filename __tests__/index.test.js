import { render, screen } from "@testing-library/react";
import Home from "../app/page.tsx";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders home", () => {
    render(<Home />);

    const heading = screen.getByText("Hello World");
    expect(heading).toBeInTheDocument();
  });
});
