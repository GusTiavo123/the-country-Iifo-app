# The Country Info App

This application provides information about countries. Follow the steps below to set up and run the app on your local machine.

## Prerequisites

- **Node.js** installed on your system
- **Git** installed on your system

## Installation

### 1. Clone the Repository

Open your terminal and run the following command to clone the project:

```bash
git clone https://github.com/GusTiavo123/the-country-info-app.git
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd the-country-info-app/backend/
```

Install the necessary dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The backend server will start and listen on port **3000**.

### 3. Set Up the Frontend

Open a new terminal window and navigate to the frontend directory:

```bash
cd the-country-info-app/frontend/
```

Install the necessary dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will start and listen on port **4000**.

## Running the App

With both the backend and frontend servers running simultaneously, you can now use the app. Open your web browser and navigate to:

```
http://localhost:4000
```

## Notes

- Ensure both servers are running at the same time for the application to function correctly.
- If you encounter any issues, check the terminal windows for error messages and verify that all dependencies are properly installed.