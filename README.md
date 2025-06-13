# npm Monorepo Onboarding Example

This project serves as an example to onboard developers into npm monorepo projects. It aims to answer common questions and provide practical guidance.

## Common Questions and Answers

**1. What is a monorepo?**

A monorepo is a single repository that contains multiple projects. In this case, we have a `packages` directory containing separate npm packages.

**2. Why use a monorepo?**

-   **Code sharing:** Easier to share code between projects.
-   **Dependency management:** Simplified dependency management across projects.
-   **Atomic changes:** Make changes across multiple projects in a single commit.
-   **Simplified refactoring:** Easier to refactor code across multiple projects.

**3. How are dependencies managed in this monorepo?**

Dependencies are managed using npm workspaces. The `package.json` file in the root directory defines the workspaces.

**4. How do I install dependencies?**

Run `npm install` in the root directory. This will install all dependencies for all packages in the monorepo.

**5. How do I run tests for all packages?**

Run `npm run test` in the root directory. This will execute the test scripts defined in each package's `package.json` file.

**6. How do I build all packages?**

Run `npm run build` in the root directory. This will execute the build scripts defined in each package's `package.json` file.

**7. How do I publish packages?**

Each package can be published independently. Navigate to the package's directory and run `npm publish`. Ensure you have the correct permissions and versioning in place.

## Project Structure

-   `packages/server`: A simple Node.js server.

## Getting Started

1.  Clone the repository.
2.  Run `npm install` in the root directory.
3.  Navigate to the `packages/server` directory.
4.  Run `npm start` to start the server.

## Further Information

-   [npm Workspaces Documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces)