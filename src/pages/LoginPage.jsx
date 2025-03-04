import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col, Image, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import logo from '/Users/betuliltir/interclub/src/asssets/sabancı logo.jpeg';
import '/Users/betuliltir/interclub/src/pages/LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Login attempted with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Login successful!');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={5} lg={4}>
          <Card className="shadow-sm border-0 login-card">
            <Card.Body className="px-3 py-3">
              <div className="text-center mb-2">
                <Image src={logo} alt="Sabancı Uni Logo" className="logo-img mb-1" />
                <h2 className="brand-logo">InterClub</h2>
                <p className="text-muted mb-3">Sign In</p>
              </div>

              {error && <Alert variant="danger" className="py-1 small">{error}</Alert>}

              <Form onSubmit={handleSubmit} className="compact-form">
                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@sabanciuniv.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control-sm"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label-sm">Password</Form.Label>
                  <InputGroup className="input-group-sm">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control-sm"
                    />
                    <Button variant="outline-secondary" size="sm" onClick={togglePassword} className="password-toggle">
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <div className="text-end mb-3">
                  <Link to="/forgot-password" className="forgot-link">
                    <small>Forgot password?</small>
                  </Link>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="login-btn w-100 py-2 mb-2"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>

                <div className="text-center mt-1">
                  <small className="text-muted">
                    Don't have an account? <Link to="/register" className="register-link">Register</Link>
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;