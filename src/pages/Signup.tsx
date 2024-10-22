import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import useLocalStorage from '../hooks/Localstorage';
import { ValidationError, validateSignup } from '../utils/Validationutils';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationError>({});
  const navigate = useNavigate();

  const [, setUser] = useLocalStorage('user', { name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateSignup(name, email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      setUser({ name, email, password });

      setTimeout(() => {
        console.log('Signing up...', { name, email, password });
        setIsLoading(false);
        navigate("/user");
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Create Account</h2>
              <Form onSubmit={handleSubmit}>
                <FormInput
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  required
                  isInvalid={!!errors.name}
                  errorMessage={errors.name}
                />
                <FormInput
                  label="Email address"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  required
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                />
                <FormInput
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: '' }));
                  }}
                  required
                  isInvalid={!!errors.password}
                  errorMessage={errors.password}
                />
                <SubmitButton
                  label="Sign Up"
                  isLoading={isLoading}
                  onClick={handleSubmit}
                />
              </Form>
              <div className="text-center mt-3">
                <small className="text-muted">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;