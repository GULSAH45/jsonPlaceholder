// src/Home.js
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  // Change background color on page load
  useEffect(() => {
    document.body.style.backgroundColor = '#121212';
    
    // Clean up on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <div 
        className="position-relative text-white d-flex align-items-center justify-content-center" 
        style={{ 
          height: '80vh', 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center p-4">
          <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            SHADOW DETECTIVE AGENCY
          </h1>
          <p className="lead mb-5" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem' }}>
            We bring truth to light from the darkness. Our professional team solves every case.
          </p>
          <Link to="/users">
            <Button variant="danger" size="lg" className="px-5 py-3 fw-bold">
              MEET OUR DETECTIVES
            </Button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-5 border-bottom pb-3">OUR SERVICES</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white" className="h-100 border-danger">
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="bi bi-search" style={{ fontSize: '3rem', color: '#dc3545' }}></i>
                  </div>
                  <Card.Title className="fw-bold">PRIVATE INVESTIGATIONS</Card.Title>
                  <Card.Text>
                    We offer confidential and professional investigations for both personal and corporate cases.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white" className="h-100 border-danger">
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="bi bi-person-fill-lock" style={{ fontSize: '3rem', color: '#dc3545' }}></i>
                  </div>
                  <Card.Title className="fw-bold">MISSING PERSONS</Card.Title>
                  <Card.Text>
                    Using exclusive methods and our wide network, we locate missing individuals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card bg="dark" text="white" className="h-100 border-danger">
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="bi bi-file-earmark-text" style={{ fontSize: '3rem', color: '#dc3545' }}></i>
                  </div>
                  <Card.Title className="fw-bold">EVIDENCE COLLECTION</Card.Title>
                  <Card.Text>
                    We professionally gather and document legally valid evidence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Statistics Section */}
      <div className="bg-black text-white py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <h2 className="text-danger fw-bold">250+</h2>
              <p>SOLVED CASES</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="text-danger fw-bold">15+</h2>
              <p>EXPERT DETECTIVES</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="text-danger fw-bold">10+</h2>
              <p>YEARS EXPERIENCE</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="text-danger fw-bold">98%</h2>
              <p>CUSTOMER SATISFACTION</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Us Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h2 className="border-bottom border-danger pb-3 mb-4">ABOUT US</h2>
              <p className="lead">
                Founded in 2010, the Shadow Detective Agency is operated by former law enforcement officers and security experts.
              </p>
              <p>
                Operating with discretion, professionalism, and ethical values, our agency has successfully resolved hundreds of cases. Our team always prioritizes customer satisfaction and crafts unique solutions for every case.
              </p>
              <Button variant="outline-danger" className="mt-3">MORE INFO</Button>
            </Col>
            <Col md={6} className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1608575009483-dd83a622adc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Detective Office" 
                className="img-fluid rounded shadow"
                style={{ opacity: 0.8 }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact CTA */}
      <div 
        className="text-white py-5"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container className="text-center">
          <h2 className="mb-4">TELL US YOUR CASE</h2>
          <p className="lead mb-4">
            We provide 24/7 confidential services. Contact us immediately.
          </p>
          <Button variant="danger" size="lg" className="px-4">
            <i className="bi bi-telephone-fill me-2"></i> CONTACT US
          </Button>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white-50 py-4 text-center">
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Shadow Detective Agency. All rights reserved.
          </p>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;
