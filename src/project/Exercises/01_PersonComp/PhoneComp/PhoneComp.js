import Button  from "react-bootstrap/Button";
import  Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";


function PhoneComp(props) {

    return ( 
        <Container sm='auto'>
            <Row className="justify-content-md-center p-1">
                <Col xs lg="2">
                    {props.type}: {props.number}
                </Col>
                <Col xs lg="2">
                    <Button variant="info" onClick={()=>{
                        console.log(props.type, props.number)
                    }}>Print to console</Button>
                </Col>
            </Row>  
        </Container>
    );
}

export default PhoneComp;