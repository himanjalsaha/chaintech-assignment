import React from 'react';
import { Form } from 'react-bootstrap';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  isInvalid?: boolean;
  errorMessage?: string; // Add this line
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  isInvalid,
  errorMessage,
}) => {
  return (
    <Form.Group controlId={label}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        isInvalid={isInvalid}
      />
      {isInvalid && errorMessage && (
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormInput;
