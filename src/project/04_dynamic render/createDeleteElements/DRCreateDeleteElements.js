import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function DRCreateDeleteElements() {

    const [isExist, setIsExist] = useState(false);

    return ( <div>
        <h1 className="text-center m-4">Create Delete Elements - Dynamic Render Style</h1>
        <hr />
        <Button variant="info" className="text-white" onClick={()=>{
            setIsExist(!isExist)
        }}>Add/Delete Element</Button>
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            isExist && <h1>way 01 creates new h1 title</h1>
                        }
                    </Col>
                    <Col>
                        {
                            isExist ? <h1>way 02 creates new h1 title</h1> : null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    </div> );
}

export default DRCreateDeleteElements;