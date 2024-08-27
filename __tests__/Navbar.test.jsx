import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/app/components/Navbar";

describe("Navbar", () => {
    it("renders a text", () => {
        render(<Navbar />);

        const heading = screen.getByRole("li", { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
