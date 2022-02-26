// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Progress, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Light Box
import Lightbox from 'react-image-lightbox';
import '../../../node_modules/react-image-lightbox/style.css';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';
import ProcessBox from '../../components/Shared/ProcessBox';

// import images
import personal01 from '../../assets/images/personal/1.jpg';
import personal02 from '../../assets/images/personal/2.jpg';
import personal03 from '../../assets/images/personal/3.jpg';
import personal04 from '../../assets/images/personal/4.jpg';
import personal05 from '../../assets/images/personal/5.jpg';
import personal06 from '../../assets/images/personal/6.jpg';

//creating array of images for image portfolio
const images = [
  personal01,
  personal02,
  personal03,
  personal04,
  personal05,
  personal06,
];

export class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          id: 1,
          title: 'Planning',
          desc: 'We use the brilliant minds at Invasso to meticulously plan your projects. Whether it’s user experience or eye-catching design, we create to garner the best attention to your brand.',
          link: '#',
        },
        {
          id: 2,
          title: 'Analysis',
          desc: 'Invasso has an expansive tool set to analyze the marketplace and test your project’s viability in target demographics. We work to maximize engagement and conversion for your business.',
          link: '#',
        },
        {
          id: 3,
          title: 'Designing',
          desc: 'We use the data and information from our planning and analysis to create innovative solutions for your project. Trust that our designs will achieve your company’s ambitions.',
          link: '#',
        },
        {
          id: 3,
          title: 'Development',
          desc: 'Once the design reaches its final stages, we’ll use our development team to swiftly create the solution using the specialists most suited to the service.',
          link: '#',
        },
        {
          id: 3,
          title: 'Deployment',
          desc: 'Watch as we deploy your project to raise your businesses profile.',
          link: '#',
        },
        {
          id: 3,
          title: 'Maintenance',
          desc: 'We’ll maintain any necessary projects and continually improve them as feedback and data return from the deployment. Invasso commits to the most competitive projects through adaptive maintenance.',
          link: '#',
        },
      ],
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="section">
          <Container className="mt-100 mt-60">
            {/* section title */}
            <SectionTitle
              isLeft={true}
              title="Work Process"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {/* process box */}
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Operations;
