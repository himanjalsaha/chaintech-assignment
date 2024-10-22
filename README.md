# Code Snip - User Authentication

## Overview

**Code Snip** is a user authentication application built using React and TypeScript. This application allows users to create accounts and log in securely, providing a seamless experience for user management with input validation and error handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Components](#components)
- [Validation](#validation)
- [Usage](#usage)
- [Conclusion](#conclusion)

## Features

- User-friendly signup and login forms.
- Input validation with real-time error feedback.
- Local storage management for user sessions.
- Conditional rendering of error messages.
- Responsive design using React Bootstrap.
- Navigation between signup and login pages.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and improved development experience.
- **React Bootstrap**: For responsive UI components.
- **React Router**: For handling routing between views.
- **Local Storage**: For storing user credentials temporarily.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/himanjalsaha/chaintech-assignment


folder structure
src/
│
├── components/
│   ├── FormInput.tsx
│   ├── SubmitButton.tsx
│
├── hooks/
│   └── Localstorage.ts
│
├── utils/
│   └── Validationutils.ts
│
├── pages/
│   ├── Login.tsx
│   └── Signup.tsx
│
├── App.tsx
└── index.tsx




Components

    FormInput.tsx: A reusable component for rendering input fields with validation.
    SubmitButton.tsx: A styled button component for form submission.

Validation

    Validationutils.ts: Contains utility functions for input validation, ensuring that user data is checked for correctness before processing.

Usage

    Users can navigate to the Signup page to create a new account.
    After successful registration, users can log in via the Login page.
    The application provides real-time feedback for form inputs.
