import { useState } from 'react';
import {Container} from 'react-bootstrap';
import './scss/Ex_01.scss';

function DynamicRenderEx01Comp() {
    const [isBlue, setIsBlue] = useState(false);
    return ( <Container className='mt-4'>
        <h1>Ex_01</h1>
        <hr />
        <span className='mx-3'> render color by input size :</span>
        <input className={(isBlue? 'bg-blue': 'bg-red')} type={'text'} onChange={(e)=>{
            if(e.target.value.length < 5) setIsBlue(true);
            else setIsBlue(false);
        }}></input>
        
    </Container> );
}

export default DynamicRenderEx01Comp;