import { useState } from "react";

function CompsCommunication2(props) {
    const [Name, setName] = useState("")
    return ( <div>
        <h4>hello from child</h4>
        <input type="text" name="comunication" id="1" onChange={(e)=>{setName(e.target.value)}} />
        <button onClick={()=>{
            props.callback(Name)
        }}>click me</button>
        <h4>hello from child footer</h4>
    </div> );
}

export default CompsCommunication2;

