import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "./Footer";

describe("Header component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders portfolio link correctly", async () => {
    render(<Footer />);

    const portfolioLink = await screen.findByText(/Luna Smith/i);
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toBeVisible();
  });

  it("renders GitHub link correctly", async () => {
    render(<Footer />);

    const GitHubLink = await screen.findByText(/GitHub/i);
    expect(GitHubLink).toBeInTheDocument();
    expect(GitHubLink).toBeVisible();
  });

  it("renders text correctly", async () => {
    render(<Footer />);

    const texElement1 = await screen.findByText(/Coded by/i);
    expect(texElement1).toBeInTheDocument();
    expect(texElement1).toBeVisible();

    const texElement2 = await screen.findByText(/open-source/i);
    expect(texElement2).toBeInTheDocument();
    expect(texElement2).toBeVisible();
  });
});