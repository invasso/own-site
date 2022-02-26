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

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: personal01,
          title: 'Shifting Perspective',
          subject: 'Studio',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
        {
          image: personal02,
          title: 'Colors Magazine',
          subject: 'Web Design',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
        {
          image: personal03,
          title: 'Spa Cosmetics',
          subject: 'Developing',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
        {
          image: personal04,
          title: 'Riser Coffee',
          subject: 'Branding',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
        {
          image: personal05,
          title: 'Dancing With My Self',
          subject: 'Photography',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
        {
          image: personal06,
          title: 'New Trends in SEO',
          subject: 'Business',
          author: 'Thomas Brewer',
          date: '13th August, 2019',
        },
      ],
      processes: [
        {
          id: 1,
          title: 'Discuss The Project',
          desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: '#',
        },
        {
          id: 2,
          title: 'Develop & Elaborate',
          desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          link: '#',
        },
        {
          id: 3,
          title: 'Final Approvement',
          desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
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

export default About;
