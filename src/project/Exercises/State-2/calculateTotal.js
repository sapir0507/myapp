import { useState } from "react";
import  {Button, Container, Row, Col} from 'react-bootstrap';

function CalculateTotal() {

    const [sum, setSum] = useState(0)
    const [currentVal, setCurrentVal] = useState(0)
    
    return ( <div>
        <Container className="mt-5">
           <Row className="align-items-center">
           <Col sm="auto" className="mt-1">
                Num :
           </Col>
            <Col sm="auto" className="mt-1">
                  <input className="m-2" type={"text"} id="inputValue" placeholder="0" onChange={(e)=>{
                    setCurrentVal(parseInt(e.target.value))
                 }} ></input>
            </Col>
          
           
           </Row>
            <hr />
            <Row className="align-items-center">  
                <Col sm="auto">
                    <Button variant="info" onClick={()=>{ 
                        if(!isNaN(currentVal)) 
                            setSum(sum + currentVal)
                        }}>+</Button>
                </Col>
                <Col sm="auto" className="mx-3">
                    
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