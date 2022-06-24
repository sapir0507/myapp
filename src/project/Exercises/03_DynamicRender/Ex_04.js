import './scss/Ex_04.scss';

function EX04DynamicTableRendering() {
    const tableObj = [
        {name: 'Dana', age: 20, city: 'Haifa'},
        {name: 'Ron', age: 22, city: 'Tel Aviv'},
        {name: 'Dov', age: 31, city: 'Ashdod'},
        {name: 'Vered', age: 19, city: 'Eilat'}
    ]
    return ( <div>
        <h1>EX 04 - Dynamic List Rendering</h1>
        <hr />
        <div className='small'>
             <ul>
            {tableObj.map((item, i)=>{
                return <li>
                        {item.name}
                        <ul>
                            <li>Age: {item.age}</li>
                            <li>City: {item.city}</li>
                        </ul>
                    </li>
               
            })}
        </ul>
        </div>
       
    </div> );
}

export default EX04DynamicTableRendering;