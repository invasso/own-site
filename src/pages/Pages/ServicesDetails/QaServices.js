import React, { Component } from 'react';

//import images
import crypto1 from '../../../assets/images/crypto/lapy01.png';
import crypto2 from '../../../assets/images/crypto/iphone.png';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/Shared/SectionTitle';

export class QaServices extends Component {
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
          <Container className="mt-100 mt-60">
            <SectionTitle
              title="QA SERVICES"
              desc="that can provide everything you need to generate awareness, drive traffic, connect"
            />
            <p className="text-muted">
              Invasso is here tо асhіеvе a соmрlеtе сuѕtоmеr satisfaction іn оur
              app dеvеlорmеnt рrоjесtѕ. Tо еnѕurе thаt thе рrоjесt result
              еxсееdѕ уоur еxресtаtіоnѕ and mееtѕ уоur аіmѕ and goal. Wе аlѕо
              dеѕіgn аdvаncеd аnd рrоfеѕѕіоnаl mоbіlе ѕоlutіоnѕ fоr buѕіnеѕѕ,
              соmmunісаtіоn, ѕосіаl nеtwоrkіng, аnd еntеrtаіnmеnt.
            </p>

            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={crypto1} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    BENEFITS OF OUR QA AND TESTING SERVICES
                  </h4>
                  <p className="text-muted">
                    When you turn to INVASSO, you get long experience in QA and
                    software testing. We leverage the latest tech, practices,
                    and standards to help you create high-quality software
                    within the required time frame.
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
                  <h4 className="title mb-4">EXPERIENCE IN QA SERVICES</h4>
                  <p className="text-muted">
                    INVASSO QA testers have ensured the trouble-free operation
                    of countless software solutions. Our experts have tested
                    dozens of mobile applications, complex enterprise software
                    for Fortune 500 companies, IoT ecosystems, a block-chain
                    marketplace, and more. As a result, you get fail-safe
                    software your company can rely on.
                  </p>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <img src={crypto2} className="img-fluid" alt="" />
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
                  <h4 className="title mb-4">ESTABLISHED IN-HOUSE STANDARDS</h4>
                  <p className="text-muted">
                    We deliver QA services according to procedures, guidelines,
                    and projects documents we developed based on the best
                    industry practices and standards. Our QA testers prevent
                    defects from occurring in the first place and facilitate the
                    high quality and timely delivery of every software solution.
                  </p>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <img src={crypto2} className="img-fluid" alt="" />
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
                  <h4 className="title mb-4">AUTOMATION & AGILITY</h4>
                  <p className="text-muted">
                    To ensure fast delivery of your software without losing in
                    quality, we employ a selected approach to automated QA. We
                    use automated Unit testing on every project, while automatic
                    Acceptance and other types of testing rely on your
                    enterprise software architecture, tech stack, project scale,
                    and other factors. Our DevOps engineers and QA testers work
                    side by side to allow for seamless and continuous agile
                    delivery.
                  </p>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <img src={crypto2} className="img-fluid" alt="" />
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
                    OUR QA AND SOFTWARE TESTING SERVICES
                  </h4>
                  <p className="text-muted">
                    We offer you a comprehensive set of software quality
                    assurance services. You get solid, trouble-free software
                    that meets your requirements and business objectives.
                  </p>
                </div>
              </Col>

              <Col lg={5} md={6} className="order-1 order-md-2">
                <img src={crypto2} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default QaServices;
