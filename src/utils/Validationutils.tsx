export interface ValidationError {
    name?: string;
    email?: string;
    password?: string;
  }
  
  export const validateSignup = (name: string, email: string, password: string): ValidationError => {
    const errors: ValidationError = {};
  
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };
  
  export const validateLogin = (email: string, password: string): ValidationError => {
    const errors: ValidationError = {};
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };