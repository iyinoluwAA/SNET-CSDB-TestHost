import '../Styles/Members.css'
import logo from '../assets/SNET-Logo.png';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Members = () => {
    return (
      <Container fluid className="d-flex body justify-content-center align-items-center min-vh-100 bg-light">
      <Row>
          <Col>
              <div className="members-form p-4 rounded shadow">
                  <h2 className="text-center mb-4 "><img src={logo} alt="App Logo" className="appLogo" />
                  Submit Your Information</h2>
                  <p className="text-center text-muted">
                      Please fill out the forms below with your personal and professional details.
                  </p>

                  <Form>
                      {/* Member Information */}
                      <h4 className="mb-3">Member Information</h4>
                      <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Tell us a little about yourself</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Enter here" />
                      </Form.Group>

                      {/* Skill Information */}
                      <h4 className="mb-3">Skill Information</h4>
                      <Form.Group className="mb-3">
                          <Form.Label>Skills</Form.Label>
                          <Form.Control type="text" placeholder="e.g., Communication, Teamwork, JavaScript etc" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Expertise</Form.Label>
                          <Form.Control type="text" placeholder="e.g., Expert in Project Management'" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Experience</Form.Label>
                          <Form.Control type="number" placeholder="Enter years of Experience" />
                      </Form.Group>

                      {/* Plans and Availability */}
                      <h4 className="mb-3">Plans and Availability</h4>
                      <Form.Group className="mb-3">
                          <Form.Label>Hours Per Week</Form.Label>
                          <Form.Control type="number" placeholder="e.g., 5" />
                      </Form.Group>

                      <Form.Group className="mb-4">
                          <Form.Label>Reason for Joining</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Why do you want to join?" />
                      </Form.Group>

                      <Form.Group className="mb-4">
                          <Form.Label>What interests you about this community?</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="What do you find interesting about our ecosystem?" />
                      </Form.Group>

                      <Form.Group className="mb-4">
                          <Form.Label>Impact plan</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="How do you plan to impact the program?" />
                      </Form.Group>

                      {/* Submit Button */}
                      <Button variant="primary" type="submit" className="submit-btn w-100">
                          Submit Information
                      </Button>
                  </Form>

                  <div className="text-center mt-3">
                      <a href="#" className="back-button">Go Back to Members List</a>
                  </div>
              </div>
          </Col>
      </Row>
  </Container>
    );
};

export default Members;
