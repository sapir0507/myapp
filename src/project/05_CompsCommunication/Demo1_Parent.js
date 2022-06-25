import CompsCommunication2 from "./Demo1_Child";

function CompsCommunication1() {
    const getDataFromChild = (data) =>{
        console.log(data);
    }
    return ( <div className="text-center m-4">
        <h1>Parent title</h1>
        <hr />
        <h2>hello from parent</h2>
        <CompsCommunication2 callback={getDataFromChild}></CompsCommunication2>
        <h2>hello from parent footer</h2>
    </div> );
}

export default CompsCommunication1;