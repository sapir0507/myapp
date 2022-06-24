import { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './scss/Ex_05.scss';

function Ex05DynamicAddToTableComp() {

    const tableObj = [
        {name: 'Dana', age: 20, city: 'Haifa'},
        {name: 'Ron', age: 22, city: 'Tel Aviv'},
        {name: 'Dov', age: 31, city: 'Ashdod'},
        {name: 'Vered', age: 19, city: 'Eilat'}
    ]

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [table, setTable] = useState(tableObj)

    const addToTable = () => {
        setTable([...table, {name: name, age: parseInt(age), city: city}])
    }

    return ( <Container>
        <h1>EX 03 - Dynamic Table Rendering</h1>
        <hr />
        <Container className='justify-content-md-center align-items-md-center'>
            <table>
                <tbody>
                    <tr>
                        <td>new name:</td>
                        <td><input type={'text'} onChange={(e)=>{setName(e.target.value)}}/></td>
                        
                    </tr>
                    <tr>
                        <td>new age:</td>
                        <td><input type={'text'} onChange={(e)=>{setAge(e.target.value)}}/></td>  
                    </tr>
                    <tr>
                        <td>new city:</td>
                        <td><input type={'text'} onChange={(e)=>{setCity(e.target.value)}}/></td>  
                    </tr>
                </tbody>
            </table>
            
           
            
            <Row>
                <Col className='m-4'>
                    <Button variant='secondary' onClick={addToTable}>
                        Add to Table
                    </Button>
                </Col>
            </Row>
        </Container>
        <hr />
        <table border={'1'} className='tableBorder'>
            <tbody>
            <tr>
            {
                Object.keys(tableObj[1]).map((myKey, i)=>{
                    return <th key={i}>{myKey}</th>
                })
            }
           </tr>
            {
                table.map((item, i)=>{
                    return <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </Container> );
}

export default Ex05DynamicAddToTableComp;