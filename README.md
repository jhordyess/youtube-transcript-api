# Express TypeScript Webpack Starter

This is a starter project for building a backend application using Express, TypeScript, and Webpack.

## Features

- **Express**: Fast and minimalist web framework for Node.js. (v. 5)
- **TypeScript**: Strongly typed JavaScript for better development experience. (v. 5)
- **Webpack**: Module bundler for compiling and optimizing the code. (v. 5)
- **ESLint**: Linting for maintaining code quality. (v. 9)
- **Prettier**: Code formatting for consistent style. (v. 3)
- **Husky**: Git hooks for enforcing pre-push checks. (v. 9)
- **Yarn**: Package manager for managing dependencies. (v. 4)

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/download) (LTS version recommended).
2. Enable Corepack to use a stable version of Yarn:

```sh
corepack enable
```

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/jhordyess/express-ts-webpack-starter.git
```

2. Navigate to the project folder:

```sh
cd express-ts-webpack-starter
```

3. Install dependencies:

```sh
yarn install
```

4. Start the development server:

```sh
yarn dev
```

5. Open your browser or API client and interact with the server running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```md
fastify-typescript-starter/
├── .env.example            # Example environment variables file.
├── .gitignore              # List of files and directories to be ignored by version control.
├── .prettierrc.json        # Prettier configuration file.
├── .yarnrc.yml             # Yarn configuration file.
├── eslint.config.js        # ESLint configuration file.
├── package.json            # Project configuration and dependencies.
├── README.md               # Project documentation.
├── tsconfig.json           # TypeScript configuration file.
├── webpack.config.js       # Webpack configuration file.
├── yarn.lock               # Yarn lock file for dependency versions.
├── .husky/                 # Directory for Git hooks managed by Husky.
│   ├── pre-push            # Pre-push hook to run linting and TypeScript checks.
├── src/
│   ├── index.ts            # Main entry point of the application.
│   ├── config.ts           # Configuration file for the application.
```

## Commands

### Start the development server

```sh
yarn dev
```

### Build the project for production

```sh
yarn build
```

### Start the production server

```sh
yarn start
```

### Run TypeScript checks

```sh
yarn ts-check
```

### Lint the code

```sh
yarn lint
```

### Validate the project (lint + TypeScript checks)

```sh
yarn validate
```

### Format the code

```sh
yarn format
```

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.

---

Happy coding!
