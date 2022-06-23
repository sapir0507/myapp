import PhoneComp from './PhoneComp/PhoneComp';
import Button from "react-bootstrap/Button";
import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import {useState } from 'react';

function PersonComp() {
    const phones = {
        'home': '03-221',
        'mobile': '052-322',
        'fax': '07-771'
    }
   const [all, setAll] = useState(false);
   const [type, setType] = useState({home: phones['home']});


    return ( <div>
       
        <Container>
            <Row className="justify-content-md-center mb-4">
                <Col lg={1} >
                    <div className='pt-3'></div> 
                        <Button variant='danger' className='text-white' onClick={()=>{
                             setAll(!all);
                        }}>All</Button>
                </Col>
           
            </Row>
            <hr />
            {all && <Row>
                
                <Container className='border p-3 mt-4' sm='auto'>
                
                    {all && Object.keys(phones).map((type, i)=>{
                        return <PhoneComp key={i} type={type} number={phones[type]}></PhoneComp>
                    })}
                
                   
                </Container>
                
               
        
            </Row>}
        </Container>
       <div className='pt-3'></div>
        <Container>
            <Row className="justify-content-md-center mb-4">
                <Col>
                 {Object.keys(phones).map((phoneType, i) =>(
                    <span key={`span${i}`}>
                        <Button variant='danger' key={`btn${i}`} className='text-white' onClick={()=>{
                            const obj = {
                                [phoneType]: [phones[phoneType]]
                            }
                        setType(obj)
                    }}>{phoneType}</Button>{' '}
                    </span>
                  ))} 
                </Col>
            </Row>
            <Row className='border p-2'>
                <Col>
                    <PhoneComp type={Object.keys(type)[0]} number={Object.values(type)[0]}></PhoneComp>
                </Col>
            </Row>
        </Container>

       
     
        
       

        

       

    </div>);
}

export default PersonComp;
