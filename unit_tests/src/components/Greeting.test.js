import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders messi is goat as a text", () => {
    //arrange
    render(<Greeting />);

    // act

    //assert
    const messiGoatElement = screen.getByText("messi is goat", {
      exact: false,
    });
    expect(messiGoatElement).toBeInTheDocument();
  }),
    test("renders good to see you when button was not clicked", () => {
      render(<Greeting />);
      const paragraphElement = screen.getByText("good to see you", {
        exact: false,
      });
      expect(paragraphElement).toBeInTheDocument();
    }),
    test("renders Changed when button was clicked", () => {
      render(<Greeting />);
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);

      const paragraphElement = screen.getByText("Changed", {
        exact: false,
      });
      expect(paragraphElement).toBeInTheDocument();
    }),
    test("not renders good to see you when button was clicked", () => {
      render(<Greeting />);
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);

      const paragraphElement = screen.queryByText("good to see you", {
        exact: false,
      });
      expect(paragraphElement).toBeNull();
    });
});
