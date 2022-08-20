import { useState } from "react";

const Change = () => {

    const [count, setcount] = useState(1)
    const [dis, setdis] = useState('')

    const minus = (evt) => {
       
        setcount(count - 1);
        if (count < 4) {
            setdis(evt.target);  
            dis.disabled = true;
        }
    };
    console.log(dis);

    const plus = () => {
        setcount(count + 1);
        dis.disabled = false;

    };

    return (
        <div style={{display:'flex'}}>
            <button className="btn btn-info" onClick={minus}>-</button>
            <h4 style={{margin:'10px'}}>{count}</h4>
            <button className="btn btn-info" onClick={plus}>+</button>
        </div>
    );
};


export default Change;