import React, { Component } from 'react';

//import images
import crypto1 from '../../../assets/images/crypto/lapy01.png';
import crypto2 from '../../../assets/images/crypto/iphone.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/Shared/SectionTitle';

export class SoftWareProjectRescue extends Component {
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
            title="SOFTWARE PROJECT RESCUE"
            desc="that can provide everything you need to generate awareness, drive traffic, connect"
          />
          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    INVASSO offers its software efficiencies in delivering your
                    project from severe pain points.
                  </h4>
                  <p className="text-muted">
                    Projects are often subject to failures because of
                    inadequacies present in the development and implementation
                    stages. Inadequacies like poor management, weak planning,
                    and incomplete project requirements can hinder the progress
                    of the entire software project. These challenges are not
                    uncommon; INVASSO offers its project management capabilities
                    and expertise in resolving all issues that might come up
                    during the development of a client’s project.
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
                  <h4 className="title mb-4">Services Offered by INVASSO</h4>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Project Assessment
                    </li>
                    <p className="text-muted">
                      A comprehensive analysis of your project and its end goal
                      requirements is made to identify weak points needing
                      optimization. INVASSO places a focus on the current and
                      potential problem areas of the client. A cost-effective
                      strategy is formulated to eliminate the threats or reduce
                      them to an acceptable level.
                    </p>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Project Rescue
                    </li>
                    <p className="text-muted">
                      INVASSO leverages its software expertise and methodologies
                      into taking complete control of your project and steering
                      it towards the intended purpose. Through the management of
                      the project, we help reduce the overall impact on your
                      budget and resources.
                    </p>
                    <li className="mb-0">
                      <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      Software Support
                    </li>
                    <p className="text-muted">
                      INVASSO provides first-rate support and maintenance for
                      each phase of your software development and
                      post-development process. Software support ensures that
                      the quality and value of our client’s projects are secured
                      while handling all the technical challenges that might
                      come up.
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
                  <h4 className="title mb-4">Why Choose INVASSO?</h4>
                  <p className="text-muted">
                    Every project requires the utmost attention and focus lest
                    it results in a waste of human resources and resources.
                    Software Project Rescue service is where INVASSO steps in as
                    a solution to such scenarios by adequately evaluating the
                    areas needing corrections in the current plan strategy. Our
                    team is well-equipped to handle particular case scenarios,
                    including optimizing performing databases, documenting code,
                    source code recovery, eliminating bugs, and any other issue
                    the client has.
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
                    Our team leverages the use of several languages, frameworks,
                    and technological solutions in achieving the goals and
                    objectives of your project. Getting our clients the
                    successful delivery of their projects is a goal we always
                    strive to achieve. Contact us if you need project recovery,
                    and we’ll guide you through the steps to securing your
                    business’s success.
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

export default SoftWareProjectRescue;
