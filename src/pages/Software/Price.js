import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';
class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: 'Free',
          price: 0,
          duration: 'mo',
          buttonText: 'Buy Now',
          btnLink: '',
          features: [
            { title: 'Full Access' },
            { title: 'Enhanced Security' },
            { title: 'Source Files' },
            { title: '1 Domain Free' },
          ],
        },
        {
          id: 2,
          title: 'Starter',
          price: 39,
          duration: 'mo',
          buttonText: 'Get Started',
          btnLink: '',
          isActive: true,
          features: [
            { title: 'Full Access' },
            { title: 'Source Files' },
            { title: 'Free Appointments' },
            { title: 'Enhanced Security' },
          ],
        },
        {
          id: 3,
          title: 'PROFESSIONAL',
          price: 59,
          duration: 'mo',
          buttonText: 'Try It Now',
          btnLink: '',
          features: [
            { title: 'Full Access' },
            { title: 'Enhanced Security' },
            { title: 'Source Files' },
            { title: '1 Domain Free' },
          ],
        },
      ],
      featuresLines: [
        { title: 'Digital Marketing Solutions for Tomorrow' },
        { title: 'Our Talented & Experienced Marketing Agency' },
        { title: 'Create your own skin to match your brand' },
      ],
      counter: [97, 15, 2, 98],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Choose Simple Pricing"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                  <div className="card-body p-0">
                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                      Basic
                    </span>
                    <h2 className="fw-bold mb-0 mt-3">$9.00</h2>
                    <p className="text-muted">Per Month</p>

                    <p className="text-muted">
                      All the basics for businesses that are just getting
                      started.
                    </p>

                    <ul className="list-unstyled pt-3 border-top">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        1 Domain Free
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                    </ul>

                    <div className="mt-4 d-grid">
                      <Link to="#" className="btn btn-primary">
                        Buy Now
                      </Link>
                      <p className="text-muted mt-3 mb-0">
                        *No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                  <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                    <span className="text-center d-block shadow small h6">
                      Best
                    </span>
                  </div>
                  <div className="card-body p-0">
                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                      Business
                    </span>
                    <h2 className="fw-bold mb-0 mt-3">$39.00</h2>
                    <p className="text-muted">Per Month</p>

                    <p className="text-muted">
                      Better for growing businesses that want more customers.
                    </p>

                    <ul className="list-unstyled pt-3 border-top">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        1 Domain Free
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                    </ul>

                    <div className="mt-4 d-grid">
                      <Link to="#" className="btn btn-primary">
                        Buy Now
                      </Link>
                      <p className="text-muted mt-3 mb-0">
                        *No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing-rates business-rate border-0 p-4 rounded-md shadow">
                  <div className="card-body p-0">
                    <span className="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">
                      Enterprise
                    </span>
                    <h2 className="fw-bold mb-0 mt-3">$79.00</h2>
                    <p className="text-muted">Per Month</p>

                    <p className="text-muted">
                      Advanced features for pros who need more customization.
                    </p>

                    <ul className="list-unstyled pt-3 border-top">
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Full Access
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Source Files
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        1 Domain Free
                      </li>
                      <li className="h6 text-muted mb-0">
                        <span className="text-primary h5 me-2">
                          <i className="uil uil-check-circle align-middle"></i>
                        </span>
                        Enhanced Security
                      </li>
                    </ul>

                    <div className="mt-4 d-grid">
                      <Link to="#" className="btn btn-primary">
                        Buy Now
                      </Link>
                      <p className="text-muted mt-3 mb-0">
                        *No credit card required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Pricing;
