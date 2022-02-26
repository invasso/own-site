import React, { Component } from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';
import { Container, Row, Col } from 'reactstrap';
// import FeatherIcon
import FeatherIcon from 'feather-icons-react';

// Modal Video
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// import image
import ab01 from '../../assets/images/course/online/ab01.jpg';
import ab02 from '../../assets/images/course/online/ab02.jpg';
import ab03 from '../../assets/images/course/online/ab03.jpg';
import { Link } from 'react-router-dom';
export class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      whatwedo: [
        {
          id: 1,
          icon: 'uil uil-chart-line',
          heading: 'Digital Marketing',
          desc: 'It is a long established fact that a reader.',
          path: '/digital-marketing',
        },
        {
          id: 2,
          icon: 'uil uil-crosshairs',
          heading: 'Mobile Application Development',
          desc: 'It is a long established fact that a reader.',
          path: '/mobile-application-development',
        },
        {
          id: 3,
          icon: 'uil uil-airplay',
          heading: 'QA Services',
          desc: 'It is a long established fact that a reader.',
          path: '/qa-services',
        },
        {
          id: 4,
          icon: 'uil uil-rocket',
          heading: 'Software Development',
          desc: 'It is a long established fact that a reader.',
          path: '/software-development',
        },
        {
          id: 5,
          icon: 'uil uil-clock',
          heading: 'Software Project Rescue',
          desc: 'It is a long established fact that a reader.',
          path: '/software-project-rescue',
        },
        {
          id: 6,
          icon: 'uil uil-users-alt',
          heading: 'UI - UX Services',
          desc: 'It is a long established fact that a reader.',
          path: '/ui-ux-services',
        },
        {
          id: 7,
          icon: 'uil uil-file-alt',
          heading: 'Certified Company',
          desc: 'It is a long established fact that a reader.',
          path: '/mobile-application-development',
        },
        {
          id: 8,
          icon: 'uil uil-search',
          heading: 'Data Analytics',
          desc: 'It is a long established fact that a reader.',
          path: '/mobile-application-development',
        },
      ],
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <div className="col-12 text-center">
                {/* render Section title */}
                <SectionTitle
                  title="Services"
                  desc=" that can provide everything you need to generate awareness, drive traffic, connect"
                />
              </div>
            </Row>
            <Row>
              {this.state.whatwedo.map((items, key) => (
                <Col lg={3} md={4} className="mt-4 pt-2" key={key}>
                  <Link
                    to={items.path}
                    className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0"
                  >
                    <span className="h1 icon2 text-primary">
                      <i className={items.icon}></i>
                    </span>
                    <div className="card-body p-0 content">
                      <h5>{items.heading}</h5>
                      <p className="para text-muted mb-0">{items.desc}</p>
                    </div>
                    <span className="big-icon text-center">
                      <i className={items.icon}></i>
                    </span>
                  </Link>
                </Col>
              ))}
              <div className="col-lg-12 text-center col-md-4 mt-4 pt-2">
                <Link to="/page-services" className="btn btn-primary">
                  See more{' '}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
