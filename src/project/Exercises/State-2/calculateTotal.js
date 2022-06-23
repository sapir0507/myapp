import { useState } from "react";
import  {Button, Container, Row, Col} from 'react-bootstrap';

function CalculateTotal() {

    const [sum, setSum] = useState(0)
    const [currentVal, setCurrentVal] = useState(0)
    
    return ( <div>
        <Container className="mt-5 justify-content-md-center">
           <Row>
            <Col>
                 <input type={"text"} id="inputValue" onChange={(e)=>{
                    setCurrentVal(e.target.value)
                 }} ></input>
            </Col>
            <Col>
                <Button variant="info" onClick={()=>{ 
                    const val = parseInt(document.getElementById('inputValue').value)
                    setCurrentVal(val)
                    if(!isNaN(val)) setSum(sum + val)
                    }}>+</Button>
            </Col>
           </Row>
            <hr />
            <Row>
                <Col>
                    {!isNaN(currentVal) && <div>
                        Sum = {sum}
                    </div>}
                    {isNaN(currentVal) && <div className="text-warning">
                        Please enter a number
                    </div>}
                </Col>
            </Row>
        </Container>

    </div> );
}

export default CalculateTotal;