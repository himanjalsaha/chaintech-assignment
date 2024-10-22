import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

interface SubmitButtonProps {
  label: string;
  isLoading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, isLoading, onClick }) => {
  return (
    <Button variant="primary" type="submit" disabled={isLoading} onClick={onClick} className="w-100  mt-5">
      {isLoading ? (
        <>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span>
        </>
      ) : (
        label
      )}
    </Button>
  );
};

export default SubmitButton;