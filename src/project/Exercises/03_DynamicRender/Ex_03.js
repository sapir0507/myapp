import { Container } from 'react-bootstrap';
import './scss/Ex_03.scss';

function EX03DynamicTableRendering() {
    const tableObj = [
        {name: 'Dana', age: 20, city: 'Haifa'},
        {name: 'Ron', age: 22, city: 'Tel Aviv'},
        {name: 'Dov', age: 31, city: 'Ashdod'},
        {name: 'Vered', age: 19, city: 'Eilat'}
    ]
    return ( <Container>
        <h1>EX 03 - Dynamic Table Rendering</h1>
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
                tableObj.map((item, i)=>{
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

export default EX03DynamicTableRendering;