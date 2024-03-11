



import Accordion from 'react-bootstrap/Accordion';
import CardComponent from '../card/card-component';
import {CardComponent2} from '../card/card-component';
import {CardComponent3,CardComponent4} from '../card/card-component';
import Bootstrap from '../styles/bootstrap';

function AccordionComponent() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> #About React</Accordion.Header>
        <Accordion.Body>
                <CardComponent4/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> #About Node.js</Accordion.Header>
        <Accordion.Body>
                         <CardComponent2/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> #About JavaScripts</Accordion.Header>
        <Accordion.Body>
                         <CardComponent3/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> #Bootstrap</Accordion.Header>
        <Accordion.Body>
                         <Bootstrap/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;