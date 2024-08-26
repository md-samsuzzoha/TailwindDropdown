/* eslint-disable @next/next/no-img-element */
"use client";

import {
    ArrowLeftOnRectangleIcon,
    CheckCircleIcon,
    CogIcon,
    FolderIcon,
    MoonIcon,
    NewspaperIcon,
    ShieldExclamationIcon,
    SunIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(1);
    const { theme, setTheme } = useTheme();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!dropdownRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <nav className="dark:bg-gray-800 dark:border-b-2 dark:border-b-slate-500 bg-[#dee8f1] dark:text-white py-4 px-6 flex justify-end items-center relative font-inter text-[#000]">
            <div className="dark:bg-gray-800 dark:border-gray-600 border relative flex items-center space-x-4 bg-[#fafbfc] p-2 rounded-md shadow-md">
                <img
                    src="/images/user.jpg"
                    alt="User"
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-start pr-4">
                    <span className="font-medium text-[#000] dark:text-white">
                        Stacy Jones
                    </span>
                    <span className="text-[#6a717e] pointer-events-none select-none">
                        Micro
                    </span>
                </div>
                {isOpen ? (
                    <ChevronUpIcon
                        onClick={toggleDropdown}
                        aria-expanded={isOpen}
                        className="dark:text-white w-8 h-8 cursor-pointer text-[#000] font-bold user-select-none" // Up arrow when dropdown is open
                    />
                ) : (
                    <ChevronDownIcon
                        onClick={toggleDropdown}
                        className="dark:text-white w-8 h-8 cursor-pointer text-[#000] font-bold user-select-none" // Down arrow when dropdown is closed
                    />
                )}
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className={`dark:bg-gray-800 dark:border-gray-600 border absolute right-6 top-20 mt-1 bg-white rounded-md drop-shadow-lg w-58 transition-all duration-300 ease-in-out ${
                        isOpen ? "dropdown-open" : "dropdown"
                    }`}
                >
                    {" "}
                    <ul className="py-2">
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <UserIcon className="w-5 h-5 mr-2" /> Accounts
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <CogIcon className="w-5 h-5 mr-2" /> Settings
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <FolderIcon className="w-5 h-5 mr-2" /> FAQ&apos;s
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <NewspaperIcon className="w-5 h-5 mr-2" />{" "}
                            Q&A&apos;s
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <ShieldExclamationIcon className="w-5 h-5 mr-2" />{" "}
                            Help/Support
                        </li>
                        <li className="flex items-center justify-around px-4 py-2 cursor-pointer space-x-4">
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
                        </li>
                        <div className="px-4 py-2 text-gray-600">
                            <div className="text-[#404040] dark:text-white">
                                SWITCH ACCOUNTS
                            </div>
                            <div className="flex flex-col items-start mt-4">
                                <div
                                    className={`dark:bg-gray-800 dark:border dark:border-gray-600 flex items-center space-x-4 rounded-md px-4 py-2 mb-2 ${
                                        selectedUser === 1
                                            ? "drop-shadow-lg bg-white"
                                            : ""
                                    } cursor-pointer`}
                                    onClick={() => handleUserSelect(1)}
                                >
                                    <img
                                        src="/images/user2.jpg"
                                        alt="User"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-lg text-black dark:text-white">
                                            Advertiser
                                        </span>
                                        <span className="font-extrabold text-xl text-black dark:text-white">
                                            Sky Jones
                                        </span>
                                        <span className="text-[#0f0f0f] text-sm">
                                            skyjones@gmail.com
                                        </span>
                                    </div>
                                    {selectedUser === 1 && (
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                    )}{" "}
                                </div>
                                <div
                                    className={`flex items-center space-x-4 px-4 py-2 mb-2 rounded-md ${
                                        selectedUser === 2
                                            ? "drop-shadow-lg bg-white"
                                            : ""
                                    } cursor-pointer`}
                                    onClick={() => handleUserSelect(2)}
                                >
                                    <img
                                        src="/images/user2.jpg"
                                        alt="User"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-lg text-black dark:text-white">
                                            Advertiser
                                        </span>
                                        <span className="font-extrabold text-xl text-black dark:text-white">
                                            Sky Jones
                                        </span>
                                        <span className="text-[#6a717e] text-sm">
                                            skyjones@gmail.com
                                        </span>
                                    </div>
                                    {selectedUser === 2 && (
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                    )}
                                </div>
                            </div>
                            <button
                                className={`dark:bg-gray-800 dark:border-gray-600 border border-white flex items-center justify-center w-full px-4 py-2 mt-4 bg-white text-black rounded-md drop-shadow-lg hover:font-bold ${
                                    theme === "dark"
                                        ? "border bg-gray-800 border-gray-600 text-white"
                                        : ""
                                }`}
                            >
                                <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
                                Sign out
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
}
