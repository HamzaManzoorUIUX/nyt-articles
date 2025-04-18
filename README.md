````markdown
# NYT Articles

## Overview

This project is a React-based application that fetches and displays articles from the New York Times API. The articles can be filtered based on different periods (e.g., last 7 days, 30 days, etc.). The application uses Vite for fast development and includes Cypress for component testing.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- **Node.js**: Ensure you have Node.js installed. It's recommended to use the LTS version.
- **pnpm**: We recommend using pnpm as the package manager for faster dependency management. Install pnpm globally by running:

  ```bash
  npm install -g pnpm
  ```

## Setup Instructions

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/nyt-articles.git
cd nyt-articles
```
````

### 2. Install dependencies

Install the required dependencies using pnpm:

```bash
pnpm install
```

### 3. Setup environment variables

Create a `.env` file in the root of the project if it doesn't already exist:

```bash
touch .env
```

Add your New York Times API key to the `.env` file. You can get the API key from the [New York Times API](https://developer.nytimes.com/).

In the `.env` file, add the following:

```env
VITE_NYT_API_KEY=your_nyt_api_key_here
```

Note: Replace `your_nyt_api_key_here` with the actual API key you receive from New York Times.

### 4. Development Environment

To start the development server, run:

```bash
pnpm run dev
```

This will start a local development server and open the app in your default browser. By default, the server will run on [http://localhost:5173](http://localhost:5173).

## Building the Project

To create a production build of your project, run:

```bash
pnpm run build
```

This will create a `dist` directory containing the production-ready files.

## Running Tests

To run the tests for your project (unit and component tests), execute the following command:

```bash
pnpm run test
```

This will run your test suite and display the results in the terminal.

## Additional Configuration for .env

The `.env` file is used for setting environment variables for your application. Besides the `VITE_NYT_API_KEY`, you can add other environment variables as needed.

Example of `.env` file:

```env
VITE_NYT_API_KEY=your_personal_nyt_api_key
```

## Notes

- Make sure you are using **pnpm** for better performance with large projects and better management of dependencies.
- You can check out the [Vite documentation](https://vitejs.dev/) for more information on configuring and extending Vite for your project.

```

```
