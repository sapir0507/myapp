import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Demo2_Input = () => {

    const sayHello = () => {
        console.log('hello');
    }

    return (<div>
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Button 
                        onClick={ sayHello } 
                        variant='warning' 
                        className="border p-1 m-2">
                            Log Hello
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input 
                        type={ 'text' }
                        className='m-2' 
                        placeholder="Input onChange logger"
                        onChange={ (e) => { 
                            console.log(e.target.value) 
                        } }>
                    </input>
                </Col>
               
            </Row>
            <Row>
                <Col>
                    <input 
                        type={ 'checkbox' }
                        className='m-2' 
                        onChange={ (e) => { 
                            console.log(e.target.checked) //boolean {true or false}
                        } }>
                    </input>
                </Col>
                <Col>
                    <p>checkbox onChange logger</p>
                </Col>
                
            </Row>
        </Container>
    </div>);
}

export default Demo2_Input;