import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import useLocalStorage from '../hooks/Localstorage';
import { ValidationError, validateLogin } from '../utils/Validationutils';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationError>({});
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const [user] = useLocalStorage('user', { name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');

    const validationErrors = validateLogin(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      if (user && email === user.email && password === user.password) {
        console.log('Logging in...', { email, password });
        setTimeout(() => {
          setIsLoading(false);
          navigate('/user');
        }, 2000);
      } else {
        setAuthError("User doesn't exist. Please check your credentials.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setAuthError("An error occurred, please try again.");
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Welcome Back</h2>
              {authError && (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              )}
              <Form onSubmit={handleSubmit}>
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
                  label="Login"
                  isLoading={isLoading}
                  onClick={handleSubmit}
                />
              </Form>
              <div className="text-center mt-3">
                <small className="text-muted">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary">
                    Sign up
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

export default Login;