import React, { useState } from 'react';
import { Container, Card, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import useLocalStorage from '../hooks/Localstorage';

// Define the User interface
interface User {
  name: string;
  email: string;
  password: string;
}

const Users: React.FC = () => {
  //  custom hook for local storage with the User type
  const [user, setUser] = useLocalStorage('user', { name: '', email: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser:User) => ({ ...prevUser, [name]: value })); // changing the input as fields update
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">User Details</h2>
              {isEditing ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    view
                  </Button>
                 
                </Form>
              ) : (
                <>
                  <ListGroup className="mb-4">
                    <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
                    <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                    <ListGroup.Item><strong>Password:</strong> {user.password}</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;