import {render, screen} from "@testing-library/react";
import App from "./App";

it("should have Hello Worlds", async () => {
    render(<App />);
    const message = await screen.findByText(/Community Hub/i);
    expect(message).toBeVisible();
})