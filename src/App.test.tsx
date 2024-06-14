import {render, screen} from "@testing-library/react";
import App from "./App";

it("should have Community Hub", async () => {
    render(<App />);
    const message = await screen.findByText(/Community Hub/i);
    expect(message).toBeVisible();
})

it("should have Header.tsx, Main.tsx and Footer.tsx components", async () => {
    render(<App />);

    const headerComponent = await screen.findByRole('header');
    expect(headerComponent).toBeVisible();

    const mainComponent = await screen.findByRole('main');
    expect(mainComponent).toBeVisible();

    const footerComponent = await screen.findByRole('footer');
    expect(footerComponent).toBeVisible();
})