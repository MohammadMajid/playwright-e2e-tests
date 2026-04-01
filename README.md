# Playwright Installation

## Steps
1. **Check if Node.js is installed:**
```sh
node -v
```
- Returns a valid node version (e.g. `v22.16.0`). If not, install Node.js first.

2. **Navigate to your project directory:**
```sh
cd /path/to/your/project
```

3. **Initialize Playwright:**
```sh
npm init playwright@latest
```
- When prompted:
  - Select `TypeScript` as the language
  - Choose to install **all browsers**

4. **Verify Playwright installation:**
```sh
npx playwright --version
```
- Shows the installed Playwright version.

---

# Folder Structure Setup

Let's create the following folder structure:

```sh
PLAYWRIGHT-E2E-TESTS/
├── .github/                    # CI Config folder
├── .vscode/                    # Editor-specific settings
│   └── mcp.json                # MCP server config for VS Code
├── config/                     # Environment-specific config files
├── data/                       # Static data and constants
│   └── constants.json          # Common constants used in tests
├── debug/                      # Optional: Debug-related outputs/logs
├── logs/                       # Application/test logs
├── node_modules/               # Auto-generated dependencies
├── playwright-report/          # Playwright HTML test report output
├── resources/                  # Misc test resources (e.g. images, files)
├── tests/                      # All organized test files
│   ├── api/                    # API test specs
│   ├── demo/                   # Demo-related test specs
│   ├── devices/                # Device related scenarios
│   ├── e2e/                    # End-to-end test specs
│   ├── functional/             # Functional test cases
│   ├── helpers/                # Utility functions for tests
│   ├── page-objects/           # Page Object Model files
├── tests-examples/             # Auto-generated sample test scenarios
├── .env.example                # Template for environment files
├── .env                        # Template for environment files
├── .gitignore                  # Git ignored files and folders
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and scripts
├── playwright.config.ts        # Playwright configuration file
├── README.md                   # Project overview and instructions
```

---

## Quick Check

1. In the `playwright.config.ts` file, comment out all other browsers and ensure only `chromium` is enabled.

2. Run the following command to verify everything still works:

```sh
npx playwright test --headed
```

If tests execute successfully, you're all set!

🎯 The target project structure is now set up. Let’s keep moving forward... 🚀

---

# Allure Reporting

This project is configured with both Playwright HTML reporting and Allure reporting.

## Commands

```sh
npm run test
```
- Runs tests and writes Allure raw results to `allure-results/`.

```sh
npm run report:allure
```
- Generates the Allure HTML report in `allure-report/`.

```sh
npm run report:allure:open
```
- Opens the generated Allure report locally.

```sh
npm run test:allure
```
- Runs tests, then generates the Allure report.

## Publish Allure on GitHub Pages

This repository includes a CI workflow at [.github/workflows/playwright.yml](.github/workflows/playwright.yml) that:
- runs Playwright tests,
- generates `allure-report/`,
- deploys the Allure HTML report to GitHub Pages on pushes to `main` or `master`.

### One-time GitHub setup

1. Open your repository in GitHub.
2. Go to Settings -> Pages.
3. Under Build and deployment, set Source to GitHub Actions.

After the next successful push to `main`/`master`, the report will be available at:

`https://<your-github-username>.github.io/<your-repo-name>/`

### If deployment fails with 404 Not Found

If the workflow step Deploy to GitHub Pages fails with a 404, GitHub Pages is not enabled yet for the repository.

1. Open Settings -> Pages in your repository.
2. Set Build and deployment -> Source to GitHub Actions.
3. Save and rerun the failed workflow.

Direct link for this repo:
https://github.com/MohammadMajid/playwright-e2e-tests/settings/pages
