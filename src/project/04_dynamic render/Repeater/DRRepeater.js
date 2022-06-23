import { Button } from "react-bootstrap";
import { useState } from "react";
import './DRRepeater.scss';

function DRRepeater() {

    const [colors, setColors] = useState(['red',
                                          'blue',
                                          'green']);
                                          
    const [persons, setPersons] = useState([
        {name:'Avi', age: '20'},
        {name:'Dana', age: '30'},
    ]);

    const [newColor, setNewColor] = useState('');

    const AddColor = () => {
        setColors([...colors,
        newColor])
    }

    const DeleteColor = () => {
        setColors([...colors].filter((value)=>{ return value !== newColor? value: null}))
    }

    return ( <div>
        <h1>Repeater - Dynamic Render Style</h1>
        <hr />
        Color{' '}:{' '}
        <input type={'text'} placeholder='write a color' onChange={(e)=>{
            setNewColor(e.target.value)
        }}></input>
        
        <hr />
        <Button variant="warning" className="text-white m-3" onClick={()=>{
            AddColor()
        }}>
            Add color
        </Button>
        <Button variant="warning" className="text-white m-3" onClick={()=>{
            DeleteColor()
        }}>
            Delete Color
        </Button>
        <hr />
        {
            colors.map((item, i)=>{
                return <h3 key={i}>{item}</h3>
            })
        }
        <hr />
        <h3>Persons' Table</h3>
        <table className=''>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            {
                persons.map((x, i)=>{
                    return <tr key={i}>
                                <td key={`td_a${i}`}> {x.name} </td>
                                <td key={`td_b${i}`}> {x.age} </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div> );
}

export default DRRepeater;