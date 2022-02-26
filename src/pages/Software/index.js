import React, { Component } from 'react';

//Import Components
import Section from './Section';
import Features from './Featuress';
import BlockContainer from './BlockContainer';
import WebsiteDescription from './WebsiteDescription';
import Price from './Price';
import Reviews from './Reviews';
import CTA from './Cta';
import AboutUs from './AboutUs';
import Services from './Services';
import OurStack from './OurStack';
import GetInTouch from './GetInTouch';
import Partners from '../Developer/Partners';
import FeedBack from './FeedBack';
import Operations from './Operations';

class Software extends Component {
  componentDidMount() {
    document.body.classList = '';
    document.getElementById('top-menu').classList.add('nav-light');
    document.getElementById('buyButton').className = 'btn btn-light';
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
      document.getElementById('buyButton').className = 'btn btn-primary';
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
      document.getElementById('buyButton').className = 'btn btn-light';
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* render section */}
        <Section />

        <section className="section pt-md-4 pt-5">
          <Partners />
          {/* About Us */}
          <AboutUs />

          {/*Services*/}
          <Services />

          {/* Features */}
          <Features />

          {/* Operations */}
          <Operations />

          {/*Feedback*/}
          <FeedBack />

          {/* pricing */}
          <Price />

          {/* Our Stack */}
          <OurStack />

          {/* Get In Touch*/}
          <GetInTouch />

          {/* block container */}
          {/* <BlockContainer /> */}

          {/* wesite description */}
          {/* <WebsiteDescription /> */}

          {/* Reviews */}
          {/* <Reviews /> */}
        </section>

        {/* CTA */}
        {/* <CTA /> */}
      </React.Fragment>
    );
  }
}

export default Software;
