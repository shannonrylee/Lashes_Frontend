import react from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Customer = () => {
  return (
    <Form>
      <Form.Group className="email_signin" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="password_signin" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="login" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Logged in" />
      </Form.Group>
      <Button variant="primary" type="login">
        Log In
      </Button>
    </Form>
  );
}

export default Customer;