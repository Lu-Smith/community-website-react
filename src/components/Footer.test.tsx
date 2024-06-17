import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "./Footer";

describe("Footer component", () => {
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

  it("renders footer text correctly", async () => {
    render(<Footer />);

    const texElement1 = await screen.findByText(/Coded by/i);
    expect(texElement1).toBeInTheDocument();
    expect(texElement1).toBeVisible();

    const texElement2 = await screen.findByText(/open-source/i);
    expect(texElement2).toBeInTheDocument();
    expect(texElement2).toBeVisible();
  });

  it("renders social links correctly", async () => {
    render(<Footer />);

    const twitterLink = await screen.findByRole('twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toBeVisible();

    const facebookLink = await screen.findByRole('facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toBeVisible();

    const instagramLink = await screen.findByRole('instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toBeVisible();
  });

  it("renders helpers links, and contact correctly", async () => {
    render(<Footer />);

    const contactContainer = await screen.findByTestId('contactContainer');
    expect(contactContainer).toBeInTheDocument();
    expect(contactContainer).toBeVisible();

    const contactLink = await screen.findByRole('contactLink');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toBeVisible();

    const phoneNumber = await screen.findByTestId('phoneNumber');
    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toBeVisible();

    const email = await screen.findByTestId('email');
    expect(email).toBeInTheDocument();
    expect(email).toBeVisible();

    const helpersContainer = await screen.findByTestId('helpersContainer');
    expect(helpersContainer).toBeInTheDocument();
    expect(helpersContainer).toBeVisible();

    const homeLink = await screen.findByRole('homeLink');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toBeVisible();

    const faqLink = await screen.findByRole('faqLink');
    expect(faqLink).toBeInTheDocument();
    expect(faqLink).toBeVisible();

    const careerLink = await screen.findByRole('careerLink');
    expect(careerLink).toBeInTheDocument();
    expect(careerLink).toBeVisible();

    const blogLink = await screen.findByRole('blogLink');
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toBeVisible();

    const supportLink = await screen.findByRole('supportLink');
    expect(supportLink).toBeInTheDocument();
    expect(supportLink).toBeVisible();
  });
});