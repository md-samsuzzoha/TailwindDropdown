import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "dropdown",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`dark:bg-gray-800 dark:text-white ${inter.className}`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
