import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Main from "./Main";

describe("Main component", () => {
  it("renders without crashing", () => {
    render(<Main />);
  });

  it("renders secotrs correctly", async () => {
    render(<Main />);

    const sectorComponent = await screen.findByRole('sector');
    expect(sectorComponent).toBeInTheDocument();
    expect(sectorComponent).toBeVisible();
  });

  it("renders title and content correctly", async () => {
    render(<Main />);

    const titleElement = await screen.findByRole('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();

    const contentElement = await screen.findByRole('content');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toBeVisible();
  });

});