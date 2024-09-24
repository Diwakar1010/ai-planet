import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { EventContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

const ChallengeForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventEdited = location.state; 
  const { events, setEvents } = useContext(EventContext); 
  
  
  const [formData, setFormData] = useState({
    challengeName: eventEdited?.title || '',
    startDate: eventEdited?.date || '',
    endDate: eventEdited?.date || '',
    description: eventEdited?.des || '',
    imageUrl: eventEdited?.image || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      imageUrl: formData.imageUrl || '', 
      status: 'Upcoming',
      title: formData.challengeName,
      date: `Starts on: ${formData.startDate}`,
      buttonText: 'Participate Now',
    };

    setEvents([...events, newEvent]);
    alert('Challenge created successfully!');
    navigate("/");
  };

  return (
    <div>
      <div style={{ backgroundColor: "#F8F9FD", width: "1440px", height: "85px" }}>
        <h1 style={{ margin: "10px", padding: "10px" }}>Challenge Details</h1>
      </div>
      <Container className='m-5'>
        <Row>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="challengeName">
                <Form.Label>Challenge Name</Form.Label>
                <Form.Control
                  type="text"
                  name="challengeName"
                  value={formData.challengeName}
                  onChange={handleChange}
                  placeholder="Enter challenge name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter challenge description"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="imageUpload">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFormData({ ...formData, imageUrl: URL.createObjectURL(e.target.files[0]) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Level</Form.Label>
                <Form.Select name="difficulty" onChange={handleChange}>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                className="w-100"
                style={{ backgroundColor: '#43a047' }}
              >
                {eventEdited ? 'Update Challenge' : 'Create Challenge'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChallengeForm;
