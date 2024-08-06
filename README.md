# SignEase

SignEase is a React application designed to help users learn and practice sign language. The app includes a real-time hand sign verifier to assist users in accurately signing letters from the alphabet.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Real-time hand sign detection
- Alphabet tutorial
- Visual feedback on sign accuracy
- Progress tracking


## Installation

To get started with SignEase, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/signease.git
    cd signease
    ```

2. **Install dependencies** using Yarn:

    ```bash
    yarn install
    ```

## Usage

Before running the application, you need to set a Node.js environment variable to ensure compatibility with certain packages. This can be done by running the following command in your terminal:

**On Windows**

    ```bash
    set NODE_OPTIONS=--openssl-legacy-provider
    ```
**On macOS or Linux**

    ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    ```

After setting the environment variable, you can start the development server with:

    ```bash
    yarn start
    ```

This will run the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

Contributing
We welcome contributions to SignEase! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

### To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.
