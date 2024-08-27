"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <>
            <button
                className={`flex items-center justify-center w-[128px] px-4 py-2 rounded-md ${
                    theme === "light"
                        ? "bg-white border-white drop-shadow-lg"
                        : ""
                }`}
                onClick={() => handleThemeChange("light")}
            >
                <SunIcon className="w-5 h-5 mr-2" />
                Light
            </button>
            <button
                className={`flex items-center justify-center w-[128px] px-4 py-2 rounded-md ${
                    theme === "dark"
                        ? "drop-shadow-lg border dark:bg-gray-800 dark:border-gray-600"
                        : ""
                }`}
                onClick={() => handleThemeChange("dark")}
            >
                <MoonIcon className="w-5 h-5 mr-2" />
                Dark
            </button>
        </>
    );
}
