import {Col, Row} from 'react-bootstrap';
import {ENTERPRISE_SECTION} from '../../Module/General';

function topicItem(props, i) {
  return (
    <div key={i} className="topicItem">
      <Row className="topicRow">
        <Col sm={2} lg={2} md={2}>
          {props.ICON}
        </Col>
        <Col sm={10} lg={10} md={10}>
          {props.DESCRIPTION}
        </Col>
      </Row>
    </div>
  );
}

function SectionEnterprise() {
  return (
    <div className="SectionEnterprise">
      <h2 className="title_default">{ENTERPRISE_SECTION.TITLE}</h2>
      <p>{ENTERPRISE_SECTION.SHORT_DESCRIPTION}</p>
      <div className="topicList">
        {ENTERPRISE_SECTION.TOPICS.map((props, i) => topicItem(props, i))}
      </div>
    </div>
  );
}

export {SectionEnterprise};
