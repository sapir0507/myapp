import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './ex2.scss';

function EX2x02 (props) {
   
    const [data, setData] = useState({
        name: '',
        age: 0,
        city: 'Holon',
        isAdult: true
    });

    // eslint-disable-next-line no-unused-vars
    const [citys, setCitys] = useState([
        "Holon",
        "Haifa",
        "Bat-Yam",
        "Tel-Aviv",
        "Rishon L'Chion"
    ]);

    return (<div className="text-center bg-gray p-4">
        <h4>🧒child Component🧒</h4>
        <hr />
        <Container>
            <table className="m-auto">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <Row>
                                <Col>
                                    <input required type="text" name="name" id="name" onChange={(e)=>{
                                        setData({...data, name: e.target.value})
                                    }}/>
                                </Col>
                            </Row>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Age:
                        </td>
                        <td><Row>
                            <Col>
                                <input required type="number" name="age" id="age" onChange={(e)=>{
                                    setData({...data, age: parseInt(e.target.value)})
                                }}/>
                            </Col>
                        </Row></td>
                    </tr>
                    <tr>
                        <td> City: </td>
                        <td><Row>
                            <Col>
                                <select name='city' id='city' defaultValue={'Holon'} 
                                    onChange={ (e) => { setData({...data, city: e.target.value})}}>

                                    {citys && citys.map((city, i)=>{
                                        return <option key={i} value={city}>{city}</option>
                                    })}
                                    
                                </select>
                            </Col>
                        </Row></td>
                    </tr>
                    <tr>
                        <td>Is Adult: </td>
                        <td>
                            <input required type="checkbox" name="isAdult" id="isAdult" onClick={(e)=>{
                                setData({...data, isAdult: e.target.checked})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>
                            <input type="button" value="Add" onClick={()=>{
                                props.callback(data)
                            }}/>
                        </td>
                    </tr>
                </tbody>
            </table>



        </Container>
    </div>);
}

export default EX2x02;