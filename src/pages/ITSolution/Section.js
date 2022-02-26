import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import images
import hero1 from '../../assets/images/hero1.png';
import bg2 from '../../assets/images/bg2.png';

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 pb-0 bg-primary d-table w-100 bg-home d-flex align-items-center"
          style={{
            background: `url(${bg2})`,
            backgroundPosition: 'center center',
            height: 'auto',
          }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg="6" md="12">
                <div className="title-heading mt-4 text-center text-lg-start">
                  <h1 className="heading mb-3 title-dark text-white">
                    Revolutionizing Software Solutions – Delivering Innovation
                  </h1>
                  <p className="para-desc text-white-50">
                    The Ultimate Ticket to Skyrocket Your Brand.
                  </p>
                  {/* <div className="mt-4">
                    <Link to="" className="btn btn-light">
                      <i className="uil uil-file-download"></i> Download Now
                    </Link>
                  </div> */}
                </div>
              </Col>

              <div className="col-lg-5 col-md-6 mt-5 mt-sm-0">
                <img src={hero1} className="img-fluid" alt="" />
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
