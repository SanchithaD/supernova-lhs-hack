import {TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import Col from 'react-bootstrap/Col';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
    <Col className="imgContainer1">
      <img className="superNovaLogo" src={TOP_SECTION.LOGO} alt="Supernova Lynbrook" />
    </Col>
    <h1>{TOP_SECTION.TITLE1}</h1>
    <MytypedComponent />
    </div>
  );
};

const MoinhoLogo = () => {
  return (
    <div className="topLogoContainer">
      <img className="topLogo" src={TOP_SECTION.LOGO} alt="Supernova Lynbrook" />
    </div>
  );
};

const SuperNovaLogo = () => {
  return (
    <div className="superNovaLogoContainer">
      <img className="superNovaLogo" src={TOP_SECTION.LOGO} alt="Supernova Lynbrook" />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.LONG_DESCRIPTION}</p>
      <p1> {TOP_SECTION.SHORT_DESCRIPTION}</p1>
      <div className="buttom-group">
        <a href={TOP_SECTION.ACTION_BTN}>
          {' '}
          <Btn class="sponsor_btn" type="Register" overlay="Go" />
        </a>
      </div>
    </div>
  );
};

export {Btn, Myinfo, MoinhoLogo};
