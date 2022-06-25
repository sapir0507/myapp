import { useState } from "react";
import {Container, ListGroup} from 'react-bootstrap';
import EX2x02 from "./ex2x02";
import './ex2.scss';

function EX2x01() {
    const [data, setData] = useState([])
    return ( <div className="text-center">
        <div className="bg-yellow">
<h2>Parent Component</h2>
        {data.length>0 && data.map((person, i)=>{
            return <Container key={i}>
                <ListGroup variant="flush" as={'ul'}>
                    <ListGroup.Item className="bg-yellow" as={'li'}>
                        <span>♦ </span>
                        <span className="text-capitalize">
                            {person.name}
                        </span> 
                        is {person.age} years old, lives in {person.city} and 
                        {person.isAdult? "an adult": "a minor"}
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        })
        
        }
        </div>

        <EX2x02 callback={(newData)=>{
            setData([...data, newData])
        }}></EX2x02>
       
    </div> );
}

export default EX2x01;