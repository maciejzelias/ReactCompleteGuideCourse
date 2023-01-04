import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("renders post if request succeds", async () => {
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");

    expect(listItemElement).not.toHaveLength(0);
  });
});
