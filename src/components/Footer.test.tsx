import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "./Footer";

describe("Header component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders portfolio link correctly", () => {
    render(<Footer />);

    const portfolioLink = screen.findAllByText(/Luna Smith/i);
    expect(portfolioLink).toBeVisible();
  });

  it("renders GitHub link correctly", () => {
    render(<Footer />);

    const GitHubLink = screen.findAllByText(/GitHub/i);
    expect(GitHubLink).toBeVisible();
  });

  it("renders text correctly", () => {
    render(<Footer />);

    const texElement1 = screen.findAllByText(/Coded by/i);
    expect(texElement1).toBeVisible();

    const texElement2 = screen.findAllByText(/open-source/i);
    expect(texElement2).toBeVisible();
  });
});