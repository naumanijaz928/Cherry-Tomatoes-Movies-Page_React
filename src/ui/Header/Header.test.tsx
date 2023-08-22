import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("The image component", () => {
  test("alt contains correct value", () => {
    render(<Header />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("Dreadful chery logo");
  });

});
