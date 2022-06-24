import {Container} from 'react-bootstrap';
import Ex06x01Comp from './Ex_06_1';

function Ex06DynamicPersonsListComp() {

    const personsList = [
        {name: 'Avi',
        tasks:[
            {title: 'Task A', completed: true},
            {title: 'Task B', completed: false}

        ]},
        {name: 'Dana',
        tasks:[
            {title: 'Task C', completed: false},
            {title: 'Task D', completed: true}
        ]}
    ]

    return ( <Container>
        <h1>EX 06 - Persons List Rendering</h1>
        <hr />
        {personsList.map((person, i)=>{
            return <Ex06x01Comp key={i} person={person}></Ex06x01Comp>
        })}
        
    </Container> );
}

export default Ex06DynamicPersonsListComp;