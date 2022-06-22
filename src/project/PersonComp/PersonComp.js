import PhoneComp from './PhoneComp/PhoneComp';
import {Button} from 'react-bootstrap';
import {useState } from 'react';


function PersonComp() {

   const [all, setAll] = useState(false);
   const [type, setType] = useState(`home phone number`);

    return ( <div>
        <div className='pt-3'></div>
       <PhoneComp type={type}></PhoneComp>
       <div className='pt-3'></div>
        {[
            'home',
            'phone',
            'fax'
        ].map((phoneType) =>(
            <span>
                <Button variant='danger' className='text-white' onClick={()=>{
                setType(`${phoneType} phone number`)
            }}>{phoneType}</Button>{' '}
            </span>
        ))}

        <Button variant='danger' className='text-white' onClick={()=>{
            setAll(!all);
        }}>All</Button>

        <hr />

        {all && <div className="container">
            <PhoneComp type="Home phone number"></PhoneComp>
            <PhoneComp type="Phone phone number"></PhoneComp>
            <PhoneComp type="Fax phone number"></PhoneComp>
        </div>}

    </div>);
}

export default PersonComp;
