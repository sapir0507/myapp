import {Container, Row, Col} from 'react-bootstrap';

function Ex06x01x01Comp(props) {
    return ( <Container>
        <Row>
            <Col>
            <b>Title:</b> {props.task.title}
            </Col>
        </Row>
        <Row>
            <Col>
            <b>Complete:</b> {props.task.completed? 'true': 'false'}
            </Col>
        </Row>
    </Container> );
}

export default Ex06x01x01Comp;