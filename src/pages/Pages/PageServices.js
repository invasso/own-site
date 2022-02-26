// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

//Import components
import PageBreadcrumb from '../../components/Shared/PageBreadcrumb';
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';
import Feature from '../../components/Shared/Feature';
import FeatherIcon from 'feather-icons-react';

//Import Images
import img1 from '../../assets/images/client/01.jpg';
import img2 from '../../assets/images/client/02.jpg';
import img3 from '../../assets/images/client/03.jpg';
import img4 from '../../assets/images/client/04.jpg';
import img5 from '../../assets/images/client/05.jpg';
import img6 from '../../assets/images/client/06.jpg';

import work1 from '../../assets/images/work/1.jpg';
import work2 from '../../assets/images/work/2.jpg';
import work3 from '../../assets/images/work/3.jpg';
import work4 from '../../assets/images/work/4.jpg';

class PageServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      pathItems: [
        //id must required
        { id: 1, name: 'Landrick', link: '/index' },
        { id: 2, name: 'Pages', link: '#' },
        { id: 3, name: 'Services' },
      ],

      works: [
        {
          imgUrl: work1,
          title: 'Shifting Perspective',
          subtitle: 'Studio',
          author: 'Calvin Carlo',
          date: '13th August, 2019',
        },
        {
          imgUrl: work2,
          title: 'Colors Magazine',
          subtitle: 'Web Design',
          author: 'Calvin Carlo',
          date: '13th August, 2019',
        },
        {
          imgUrl: work3,
          title: 'Spa Cosmetics',
          subtitle: 'Developing',
          author: 'Calvin Carlo',
          date: '13th August, 2019',
        },
        {
          imgUrl: work4,
          title: 'Riser Coffee',
          subtitle: 'Branding',
          author: 'Calvin Carlo',
          date: '13th August, 2019',
        },
      ],
    };
  }

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
        {/* breadcrumb */}
        <PageBreadcrumb title="Services" pathItems={this.state.pathItems} />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

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
            </Row>
          </Container>
        </section>

        <section className="section bg-light">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Our Latest Projects"
              desc="that can provide everything you need to generate awareness, drive traffic, connect."
            />

            <Row>
              {this.state.works.map((work, key) => (
                <Col key={key} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                    <CardBody className=" p-0">
                      <img
                        src={work.imgUrl}
                        className="img-fluid rounded"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <Link
                          to="page-work-detail"
                          className="title text-white d-block fw-bold"
                        >
                          {work.title}
                        </Link>
                        <small className="text-light">{work.subtitle}</small>
                      </div>
                      <div className="client">
                        <small className="text-light user d-block">
                          <i className="mdi mdi-account"></i> {work.author}
                        </small>
                        <small className="text-light date">
                          <i className="mdi mdi-calendar-check"></i> {work.date}
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageServices;
