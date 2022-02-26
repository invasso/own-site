import React, { Component } from 'react';
import { Container, Row, Col, Badge, Alert } from 'reactstrap';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';
import Feature from '../../components/Shared/Feature';

// import images
import mobile from '../../assets/images/software/mobile-hori.png';

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: 'uil uil-edit-alt h1 text-primary',
        title: 'Planing',
        description:
          'We use the brilliant minds at Invasso to meticulously plan your projects. Whether it’s user experience or eye-catching design, we create to garner the best attention to your brand.',
      },
      {
        id: 2,
        icon: 'uil uil-vector-square h1 text-primary',
        title: 'Designing',
        description:
          'We use the data and information from our planning and analysis to create innovative solutions for your project. Trust that our designs will achieve your company’s ambitions. ',
      },
      {
        id: 3,
        icon: 'uil uil-file-search-alt h1 text-primary',
        title: 'Analysis',
        description:
          'Invasso has an expansive tool set to analyze the marketplace and test your project’s viability in target demographics. We work to maximize engagement and conversion for your business.',
      },
      {
        id: 4,
        icon: 'uil uil-airplay h1 text-primary',
        title: 'Development',
        description:
          'Once the design reaches its final stages, we’ll use our development team to swiftly create the solution using the specialists most suited to the service.',
      },
      {
        id: 5,
        icon: 'uil uil-calendar-alt h1 text-primary',
        title: 'Deployment',
        description:
          'Watch as we deploy your project to raise your businesses profile. ',
      },
      {
        id: 6,
        icon: 'uil uil-clock h1 text-primary',
        title: 'Link Building',
        description:
          'We’ll maintain any necessary projects and continually improve them as feedback and data return from the deployment. Invasso commits to the most competitive projects through adaptive maintenance.',
      },
    ],
  };

  componentDidMount() {
    var featureboxes = document.getElementsByName('featurebox');
    for (var i = 0; i < featureboxes.length; i++) {
      featureboxes[i].classList.add('mt-5');
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Render Section Title */}
          <SectionTitle title="Operations" desc="" />
          <p>
            What makes Invasso’s creative solutions so efficient and effective
            is that we use a 6-step approach to every project to ensure quality,
            competitiveness, and functionality. The cycle incorporates the most
            innovative creation methods paired with the heralded skill of our
            designers, developers, and marketers.
          </p>

          {/* feature box */}
          <Feature featureArray={this.state.features} isCenter={true} />

          <Row className="justify-content-center mt-5 pt-4">
            <Col lg="10" md="12">
              <img src={mobile} className="img-fluid d-block mx-auto" alt="" />
            </Col>
            {/* <Col xs="12" className="text-center pt-2">
              <Alert color="light" className="alert-pills shadow">
                <Badge className="rounded-pill bg-primary me-1">Download</Badge>
                <span className="content">
                  {' '}
                  Trusted by the world's best{' '}
                  <i className="uil uil-cloud-download"></i>
                </span>
              </Alert>
            </Col> */}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
