const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
    dir: "./",
});

const config = {
    testEnvironment: "jsdom",
    clearMocks: true,
    collectCoverage: true,
    testEnvironment: "jsdom",
    coverageProvider: "babel",
    setupFilesAfterEnv: ["<rootDir>/jest.config.js"],
};

module.exports = createJestConfig(config);
