/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {Container} from 'react-bootstrap';
import Ex06x01x01Comp from './Ex_06_1_1';

function Ex06x01Comp(props) {

    const [person, setPerson] = useState(props.person)

    return ( <Container>
        <h3 className='mb-4'>🍁{person.name}</h3>
        
        <h5 className='m-2 mx-5'>⚒ Tasks: </h5>
        <hr />
        {
            person.tasks.map((task, i)=>{
                return <div className='border m-2 mx-5 p-2' key={i} >
                    <Ex06x01x01Comp task={task}></Ex06x01x01Comp>
                </div>
            })
        }

       
        
    </Container> );
}

export default Ex06x01Comp;