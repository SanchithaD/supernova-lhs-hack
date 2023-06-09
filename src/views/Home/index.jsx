import React from 'react';
import {SectionCamping} from 'components/Camping/index.jsx';
import {SectionEnterprise} from 'components/Enterprise/index.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  LogoSectionAbout,
  SectionAgendaAbout
} from '../../components/About/index.jsx';
import {
  FirstActivity,
  ActivityHeading
} from '../../components/Activities/index.jsx';
import {Banner} from '../../components/Banner/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import {MoinhoLogo, Myinfo} from '../../components/Landing/index.jsx';
import Subscription from '../../components/Subscription/index.jsx';
import {Sponsor, SponsorsHead, SponsorUS} from '../../components/Sponsors/sponsors.jsx';
import {EVENT_SECTION, sponsors} from '../../Module/General';
import {Mentors} from 'components/People/index.jsx';
import LowCode from 'components/LowCode/index.jsx';
import {Prizes} from 'components/Prizes/index.jsx';
import {Team} from 'components/Team/index.jsx';
import {OnlineMeetings} from 'components/OnlineMeetings/index.jsx';
import Media from 'components/Socials/index.jsx';
import {TOP_SECTION} from '../../Module/General';

const SponsorGroup = (props, index) => {
  return (
    <Row className="justify-content-center" key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={12}>
          {' '}
          <Sponsor srcx={s.src} name={s.name} link={s.link} />{' '}
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  return (
    <div
      className="Whole_div"
    >
      {/* Initial banner */}
     
      {/* Home section */}
      <div className="black_section" id="home" style={{backgroundImage: 'url(/Assets/hackathonBG.png)'}}>
        <Container fluid className="limiter">
          <Row className="Row info reverseRow">
            <Col className="info-div" sm={10} lg={12} md={12}>
              <Myinfo />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Camping here */}
      <div className="grey_white_section" id="about">
        <Container fluid className="limiter">
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <SectionCamping />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Camping ending here */}

      {/* Low code section */}
      <div className="grey_section" id="schedule">
        <Container fluid className="limiter">
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <LowCode />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mentors */}
      <div className="grey_white_section">
        <Container fluid className="limiter" id="mentors">
          <Row className="mentorsSection Row">
            <Mentors />
          </Row>
        </Container>
      </div>
      {/* Mentors ending */}


      {/* ********Sponsors here ***** */}
      <div className="grey_section">
        <Container fluid className="limiter" id="sponsors">
          <Row className="sponsorSection" id="partners">
            <SponsorsHead />
            <SponsorUS />
            {sponsors.map(SponsorGroup)}
          </Row>
        </Container>
      </div>
      {/* ********Sponsors ending here ***** */}

      {/* Prizes */}
      <div className="grey_white_section">
        <Container fluid className="limiter" id="prizes">
          <Row className="Row info2">
            <Prizes />
          </Row>
        </Container>
      </div>
      {/* Prizes ending */}

          {/* Agenda */}

    <div className="grey_section" id="agenda" style={{backgroundImage: 'url(/Assets/Home/pattern4.png)'}}>
      <Container fluid className="limiter" id="agenda">
        <Row className="agendaSection">
          <Col className="info-div">
            <SectionAgendaAbout />
          </Col>
        </Row>
      </Container>
    </div>

      {/* Agenda ending */}
  

    </div>
  );
}
