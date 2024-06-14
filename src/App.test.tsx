import {render, screen} from "@testing-library/react";
import App from "./App";

it("should have Hello Worlds", () => {
    render(<App />);
    const message = screen.findByText(/Hello Worlds/i);
    expect(message).toBeDefined();
})