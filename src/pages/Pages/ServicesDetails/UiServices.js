import React, { Component } from 'react';

//import images
import crypto1 from '../../../assets/images/crypto/lapy01.png';
import crypto2 from '../../../assets/images/crypto/iphone.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/Shared/SectionTitle';

export class UiServices extends Component {
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <SectionTitle
            title="UI | UX SERVICES"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Understanding UI/UX?</h4>
                  <p className="text-muted">
                    Customer experiences are defined by the interactions they
                    have with brands or platforms. It becomes the duty of
                    companies to streamline those user experiences to optimize
                    service delivery. User Interface deals with visual elements
                    on a page that lets the user interact with every aspect of
                    your platform. It refers to the human-computer interaction
                    and communication of an application. On the other hand, user
                    experience refers to how users’ perceptions and responses
                    when interacting with your platform. This can shape the
                    success or failure of your business or brand.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={7}
                md={6}
                className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title me-lg-5">
                  <h4 className="title mb-4">
                    UI/UX Services Offered by INVASSO
                  </h4>
                  <p className="text-muted">
                    INVASSO works with clients to design efficient and usable
                    solutions with guaranteed quality and value.
                  </p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      UI/UX Consulting
                    </li>
                    <p className="text-muted">
                      An audit on the performance of the client’s current system
                      is made to identify areas lacking in optimization. INVASSO
                      then formulates a strategy based on the requirements and
                      objectives of the business to design a better
                      infrastructure through the best industry practices.
                    </p>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Custom Design Services
                    </li>
                    <p className="text-muted">
                      INVASSO leverages its expertise and UI/UX capabilities in
                      delivering premier niche offerings. We offer Augmented
                      Reality (AR) services, Mobile App Design, Web design, and
                      cross-platform strategies. INVASSO crafts UI/UX solutions
                      that help you transform your business into one that
                      entices and holds the attention of the end-users.
                    </p>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      UI/UX Testing and Evaluation
                    </li>
                    <p className="text-muted">
                      Every process and stage of the client’s product undergo
                      quality checks by our team of experts to ensure they meet
                      pre-defined requirements. An inability of customers to
                      effortlessly interact with your platform’s interface
                      negatively impacts your output and business operations.
                      INVASSO is available to assist you in optimizing all parts
                      of your UI/UX design to ensure first-rate performance and
                      high-yielding results.
                    </p>
                  </ul>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <img src={crypto2} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Our Approach</h4>
                  <p className="text-muted">
                    The success of innovative technological solutions depends on
                    how clean and usable they are to the customers. INVASSO uses
                    the best UI/UX design practices and tools to create seamless
                    interfaces and experiences the customers can enjoy. Most
                    companies fail to realize the value of an adequately
                    implemented UI/UX design strategy; INVASSO uses research
                    tools and techniques to develop design models the clients
                    can choose from.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Industry Experience</h4>
                  <p className="text-muted">
                    We’ve successfully helped businesses with Branding and UI/UX
                    design on complex systems, apps, and websites. Invasso has a
                    comprehensive collection of UI/UX standards you can choose
                    from to achieve higher efficiency and customer retention.
                    Providing companies with our expertise involves discussing
                    their vision for their brands and their entire business
                    structure. This serves as insightful information when
                    developing design-driven solutions that address any issues
                    present like page friction or unresponsive controls.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Why Choose INVASSO?</h4>
                  <p className="text-muted">
                    Having a digitally optimized platform your customers can
                    connect with is key to transforming your customer
                    experience. At INVASSO, we understand that customers are
                    attracted to immersive and straightforward applications, and
                    we offer you a first-rate user interface through premier
                    UI/UX solutions. We provide this and so much more while
                    securing you with an increased Return on Investment (ROI) on
                    resources put into deploying each design idea.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">Get in Touch With INVASSO</h4>
                  <p className="text-muted">
                    INVASSO has a dedicated team of UI/UX design consultants and
                    developers available on-demand to empower your business. Our
                    team of specialized experts carefully planned every part of
                    our service delivery, from the conception of the design plan
                    to its implementation. You can contact us to get the process
                    started.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default UiServices;
