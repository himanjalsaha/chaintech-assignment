# Code Snip - User Authentication

## Overview

Code Snip is a modern user authentication application built with React and TypeScript. It provides a secure and intuitive interface for user account creation and authentication, featuring real-time validation and comprehensive error handling.

## Features

- 🔐 Secure user authentication system
- ✨ Intuitive signup and login forms
- ⚡️ Real-time input validation
- 💾 Local storage session management
- 🎯 Contextual error messaging
- 📱 Fully responsive design
- 🔄 Seamless navigation between auth pages

## Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **UI Framework**: React Bootstrap
- **Routing**: React Router v6
- **State Management**: React Context API
- **Storage**: Browser Local Storage

## Project Structure

```
src/
│
├── components/
│   ├── FormInput.tsx      # Reusable form input component
│   └── SubmitButton.tsx   # Custom submit button component
│
├── hooks/
│   └── useLocalStorage.ts # Custom hook for local storage operations
│
├── utils/
│   └── validation.ts      # Input validation utility functions
│
├── pages/
│   ├── Login.tsx         # Login page component
│   └── Signup.tsx        # Signup page component
│
├── App.tsx               # Main application component
└── index.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/himanjalsaha/chaintech-assignment
   ```

2. Navigate to project directory
   ```bash
   cd code-snip
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

## Component Details

### FormInput Component

A reusable input component that handles:
- Label rendering
- Input state management
- Real-time validation
- Error message display

```typescript
interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  error?: string;
}
```

### SubmitButton Component

A customizable button component for form submissions:
- Loading state handling
- Disabled state management
- Custom styling options

## Validation Rules

The application implements the following validation rules:

- **Email**
  - Must be a valid email format
  - Cannot be empty

- **Password**
  - Minimum 8 characters
  - Must contain at least one number
  - Must contain at least one special character
  - Must contain both uppercase and lowercase letters

- **Username**
  - Minimum 3 characters
  - Must contain only alphanumeric characters
  - Cannot start with a number

## Local Storage Management

The application uses local storage to:
- Store user session information
- Persist authentication state
- Cache user preferences

Example usage:
```typescript
// Custom hook implementation
const useLocalStorage = (key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // ... rest of the implementation
};
```

## Error Handling

The application implements comprehensive error handling:

- Form validation errors
- Network request failures
- Authentication errors
- Session management issues

## Usage Examples

### User Registration

```typescript
const handleSignup = async (userData: UserData) => {
  try {
    await validateUserData(userData);
    await createUser(userData);
    navigate('/login');
  } catch (error) {
    handleError(error);
  }
};
```

### User Authentication

```typescript
const handleLogin = async (credentials: Credentials) => {
  try {
    const user = await authenticateUser(credentials);
    setUserSession(user);
    navigate('/dashboard');
  } catch (error) {
    handleAuthError(error);
  }
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
