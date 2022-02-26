import React, { Component } from 'react';
import { Container, Row, Col, Media, Card, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitleLeft from '../../components/Shared/SectionTitleLeft';

//Import images
import marketing from '../../assets/images/illustrator/Marketing_strategy_SVG.svg';
import services from '../../assets/images/illustrator/services.svg';
import { Link } from 'react-router-dom';

//Import Icons

import SectionTitle from '../../components/Shared/SectionTitle';

export class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: 'uil uil-briefcase',
          title: 'Secure',
          desc: 'Security is of utmost importance in the modern-day. We protect all your digital properties and creative assets within our highly secure servers.',
        },
        {
          icon: 'uil uil-rocket',
          title: 'Fast',
          desc: 'The pace of business is lightning fast. Our team works diligently to deliver your solutions quickly and efficiently, thanks to our impeccable frameworks.',
        },
        {
          icon: 'uil uil-crosshairs',
          title: 'Low Prices',
          desc: 'Businesses shouldn’t have to cough up great expensive for outstanding creative solutions. Find some of the most competitive prices for excellent services, starting from $50/h.',
        },
      ],
      featuresSmall: [
        { title: 'Digital Marketing Solutions for Tomorrow' },
        { title: 'Our Talented & Experienced Marketing Agency' },
        { title: 'Create your own skin to match your brand' },
      ],
      featuresSmall1: [
        { title: 'Digital Marketing Solutions for Tomorrow' },
        { title: 'Our Talented & Experienced Marketing Agency' },
        { title: 'Create your own skin to match your brand' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="About Us"
              desc="We are Invasso, a team of innovators passionate about delivering remarkable services without fuss. Our focus is to streamline your businesses, offering every creative solution you need to thrive. 
"
            />
            <h4>
              We are Invasso, a team of innovators passionate about delivering
              remarkable services without fuss. Our focus is to streamline your
              businesses, offering every creative solution you need to thrive.
            </h4>
            <p>
              Discover how our expertise in software, web and mobile
              development, SEO, and visual design can help take your online and
              physical profile to new horizons.
            </p>
            <Container>
              <Row>
                {this.state.features.map((feature, key) => (
                  <Col lg={4} md={6} xs={12} key={key}>
                    <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                      <span className="h1 icon2 text-primary">
                        <i className={feature.icon}></i>
                      </span>
                      <CardBody className="p-0 content">
                        <h5>{feature.title}</h5>
                        <p className="para text-muted mb-0">{feature.desc}</p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
