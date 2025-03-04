import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col, Image, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import logo from '/Users/betuliltir/interclub/src/asssets/sabancı logo.jpeg';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolId: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    clubName: '',
    advisorDescription: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      console.log('Registration attempted with:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Successfully registered as ${formData.userType}!`);
    } catch (err) {
      setError('Registration failed. Please check your information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-center">
        <Col md={5} lg={4}>
          <Card className="shadow-sm border-0 register-card">
            <Card.Body className="px-3 py-3">
              <div className="text-center mb-2">
                <Image src={logo} alt="Sabancı Uni Logo" className="logo-img mb-1" />
                <h2 className="brand-logo">InterClub</h2>
                <p className="text-muted mb-3">Create Account</p>
              </div>

              {error && <Alert variant="danger" className="py-1 small">{error}</Alert>}

              <Form onSubmit={handleSubmit} className="compact-form">
                <Row className="mb-2">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label-sm">First Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName" 
                        placeholder="First name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="form-control-sm" 
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label-sm">Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName" 
                        placeholder="Last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="form-control-sm" 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">School ID</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="schoolId" 
                    placeholder="Your school ID" 
                    value={formData.schoolId}
                    onChange={handleChange}
                    required
                    className="form-control-sm" 
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone" 
                    placeholder="5XX XXX XX XX" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-control-sm" 
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">User Type</Form.Label>
                  <Form.Select 
                    name="userType" 
                    value={formData.userType} 
                    onChange={handleChange}
                    required
                    className="form-control-sm"
                  >
                    <option value="">Select</option>
                    <option value="student">Student</option>
                    <option value="clubAdmin">Club Manager</option>
                    <option value="clubAdvisor">Club Advisor</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="example@sabanciuniv.edu" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control-sm" 
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="form-label-sm">Password</Form.Label>
                  <InputGroup className="input-group-sm">
                    <Form.Control 
                      type={showPassword ? "text" : "password"} 
                      name="password" 
                      placeholder="Your password" 
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="form-control-sm" 
                    />
                    <Button variant="outline-secondary" size="sm" onClick={togglePassword} className="password-toggle">
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label-sm">Confirm Password</Form.Label>
                  <InputGroup className="input-group-sm">
                    <Form.Control 
                      type={showConfirmPassword ? "text" : "password"} 
                      name="confirmPassword" 
                      placeholder="Confirm password" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="form-control-sm" 
                    />
                    <Button variant="outline-secondary" size="sm" onClick={toggleConfirmPassword} className="password-toggle">
                      {showConfirmPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="register-btn w-100 py-2 mb-2" 
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register'}
                </Button>
                
                <div className="text-center mt-1">
                  <small className="text-muted">
                    Already have an account? <Link to="/login" className="login-link">Login</Link>
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

export default RegisterPage;