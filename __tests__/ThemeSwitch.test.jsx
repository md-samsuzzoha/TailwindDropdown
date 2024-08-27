import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ThemeSwitch from "../src/app/components/ThemeSwitch";

describe("ThemeSwitch", () => {
    it("renders a button", () => {
        render(<ThemeSwitch />);

        const heading = screen.getByRole("button", { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
