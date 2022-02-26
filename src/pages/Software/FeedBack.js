import React, { Component } from 'react';

import Asset190 from '../../assets/images/illustrator/Asset190.svg';
import Asset189 from '../../assets/images/illustrator/Asset189.svg';
import Asset192 from '../../assets/images/illustrator/Asset192.svg';
import Asset187 from '../../assets/images/illustrator/Asset187.svg';
import { Col, Container, Row } from 'reactstrap';

export class FeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: [
        {
          id: 1,
          img: Asset190,
          count: '97',
          percentage: '%',
          heading: 'Happy Client',
        },
        {
          id: 2,
          img: Asset189,
          count: '15',
          percentage: '+',
          heading: 'Awards',
        },
        {
          id: 3,
          img: Asset192,
          count: '2',
          percentage: 'K',
          heading: 'Job Placement',
        },
        {
          id: 4,
          img: Asset187,
          count: '98',
          percentage: '%',
          heading: 'Project Complete',
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row
              className="mt-4 pt-2 position-relative"
              id="counter"
              style={{ zIndex: '1' }}
            >
              {this.state.progress.map((progress, key) => (
                <Col md={3} xs={6} className="mt-4 pt-2" key={key}>
                  <div className="counter-box text-center">
                    <img
                      src={progress.img}
                      className="avatar avatar-small"
                      alt=""
                    />
                    <h2 className="mb-0 mt-4">
                      <span className="counter-value" data-count="97">
                        {progress.count}
                      </span>
                      {progress.percentage}
                    </h2>
                    <h6 className="counter-head text-muted">
                      {progress.heading}
                    </h6>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="feature-posts-placeholder bg-light"></div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default FeedBack;
