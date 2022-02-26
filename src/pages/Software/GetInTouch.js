import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';
import SectionTitle from '../../components/Shared/SectionTitle';

export class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: 'Landrick', link: '/index' },
        { id: 2, name: 'Page', link: '#' },
        { id: 3, name: 'CAREERS', link: '#' },
        { id: 4, name: 'Job Apply' },
      ],
      jobDetails: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ jobDetails: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
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
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* Render Section Title */}
            <SectionTitle title="Get In Touch" desc="" />

            <Row className="justify-content-center">
              <Col lg={10} md={7}>
                <Card className="custom-form border-0">
                  <CardBody>
                    <Alert
                      color="primary"
                      isOpen={this.state.jobDetails}
                      toggle={() => {
                        this.setState({ jobDetails: !this.state.jobDetails });
                      }}
                    >
                      Job Details Send successfully.
                    </Alert>
                    <Form
                      onSubmit={this.handleSubmit}
                      className="rounded shadow p-4"
                    >
                      <Row>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Name :<span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="First Name :"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Label className="form-label">
                              Your Email :<span className="text-danger">*</span>
                            </Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="Your email :"
                              required
                            />
                          </div>
                        </Col>

                        <Col md="12">
                          <div className="mb-3">
                            <Label className="form-label">Message:</Label>
                            <div className="form-icon position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary"
                            value="Send"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
