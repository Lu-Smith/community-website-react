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

});