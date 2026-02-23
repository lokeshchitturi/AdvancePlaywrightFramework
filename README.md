# Advanced Playwright Framework

This project is a sophisticated test automation framework built using [Playwright](https://rahulshettyacademy.com) and TypeScript. It follows modern design patterns like Page Object Model (POM) to ensure maintainability and scalability.

## Project Structure

The project is organized into the following key directories:

- **`pages/`**: Contains Page Object classes (e.g., `LoginPage.ts`, `HomePage.ts`) that encapsulate page-specific logic and locators.
- **`tests/`**: Contains the test specifications (e.g., `login.spec.ts`, `home.spec.ts`).
- **`enums/`**: Stores TypeScript enumerations (e.g., `Gender`, `EmploymentStatus`) used across the framework for consistent data handling.
- **`configuration/`**: Contains environment-specific configurations and global settings (e.g., `env.config.ts`).
- **`.github/workflows/`**: Contains CI/CD definitions, specifically the `playwright.yml` file.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (installed with Node.js)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies:
   ```bash
   npm install
   ```
3. Install the required Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

## Running Tests

To execute the tests locally, use the following command:

```bash
npx playwright test
```

For headed mode (to see the browser in action):

```bash
npx playwright test --headed
```

To view the generated HTML report after the tests complete:

```bash
npx playwright show-report
```

## CI/CD Integration

This project uses **GitHub Actions** for continuous integration. The workflow is defined in `.github/workflows/playwright.yml`.

- **Trigger**: The tests are automatically triggered on every `push` or `pull_request` to the `main` or `master` branches.
- **Execution**: The workflow sets up Node.js, installs dependencies, and runs the Playwright tests on an `ubuntu-latest` runner.
- **Reports**: After execution, the Playwright HTML report is uploaded as a GitHub Action artifact, which can be downloaded and viewed.
