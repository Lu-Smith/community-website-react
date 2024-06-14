import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

describe("Header component", () => {
    it("renders without crashing", () => {
      render(<Header />);
    });
  
    it("renders the intro title", () => {
      render(<Header />);
      const introTitleElement = screen.getByText(/Build The Community Your Fans Will Love/i);
      expect(introTitleElement).toBeInTheDocument();
    });
  
    it("renders the intro content", () => {
      render(<Header />);
      const introContentElement = screen.getByText(/The Community Hub re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion./i);
      expect(introContentElement).toBeInTheDocument();
    });
  
    it("renders the 'Get started' button", () => {
      render(<Header />);
      const getStartedButton = screen.getByText(/Get started/i);
      expect(getStartedButton).toBeInTheDocument();
    });
  
    it("renders the 'Try it For Free' button", () => {
      render(<Header />);
      const tryItForFreeButton = screen.getByText(/Try it For Free/i);
      expect(tryItForFreeButton).toBeInTheDocument();
    });
  
    it("renders the image with correct src and alt attributes", () => {
      render(<Header />);
      const imageElement = screen.getByAltText(/intro/i) as HTMLImageElement;
      expect(imageElement).toBeInTheDocument();
      expect(imageElement.src).toContain('community.svg'); 
      expect(imageElement.alt).toBe('intro');
    });
  });