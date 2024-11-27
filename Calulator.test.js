import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Calculator", () => {
  it("should render the calculator correctly", () => {
    render(<App />);
    expect(screen.getByText("Calculator")).toBeInTheDocument();
  });

  it("should display numbers when clicked", () => {
    render(<App />);
    const button7 = screen.getByText("7");
    fireEvent.click(button7);
    expect(screen.getByRole("textbox").value).toBe("7");
  });

  it("should clear the display when C is clicked", () => {
    render(<App />);
    const button7 = screen.getByText("7");
    const clearButton = screen.getByText("C");
    fireEvent.click(button7);
    fireEvent.click(clearButton);
    expect(screen.getByRole("textbox").value).toBe("");
  });

  it("should calculate expressions correctly", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const button2 = screen.getByText("2");
    const buttonEqual = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonEqual);

    expect(screen.getByRole("textbox").value).toBe("3");
  });

  it("should display and evaluate expressions with multiple operations", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const button2 = screen.getByText("2");
    const buttonMultiply = screen.getByText("*");
    const button3 = screen.getByText("3");
    const buttonEqual = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonEqual);

    expect(screen.getByRole("textbox").value).toBe("7");
  });

  it("should handle division by zero", () => {
    render(<App />);
    const button1 = screen.getByText("1");
    const buttonDivide = screen.getByText("/");
    const button0 = screen.getByText("0");
    const buttonEqual = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button0);
    fireEvent.click(buttonEqual);

    expect(screen.getByRole("textbox").value).toBe("Error");
  });
});
