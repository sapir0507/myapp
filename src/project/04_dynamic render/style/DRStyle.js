import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./DRStyle.scss";

function DRStyle() {

    const [isRed, setIsRed] = useState(false);
    const [isMagenta, setIsMagenta] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    return ( 
    <div>
        {
            isHidden &&
           <Container>
                <h1 style = {  { color: isRed? 'red' : 'black' }  } >Inline</h1>

                <h1 className = { isMagenta ? 'magentaStyle': 'blackStyle' }> css </h1>
           </Container>
        }
        <hr />
        <Button className="m-1" onClick={()=>{
            setIsRed(!isRed)
        }}>toggle first color</Button>
        <Button className="m-1" onClick={()=>{
            setIsMagenta(!isMagenta)
        }}>toggle second color</Button>
        <Button className="m-1" onClick={()=>{
            setIsHidden(!isHidden)
        }}>Hide/Show</Button>
    </div> 
    );
}

export default DRStyle;