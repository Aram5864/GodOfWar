import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.scss";
{
    /* {data.map((item) => {
                return <h1>{item.name}</h1>;
            })} */
}

{
    /* events */
}

{
    // const asd = (evt) => {
    //     if (evt.keyCode === 13) {
    //         console.log(evt.keyCode);
    //     }
    // };
}

{
    /* onMouseEnter */
    /* onClick */
    /* onChange onKeyDown */
    /* onKeyUp */
    /* onCopy */
    /* onMouseOut */
}


function Ax() {
    const [data, setdata] = useState([]);
    const [age1, setage] = useState([]);

    const age = (evt)=>{
        setage(evt.target.valuel);
    }
    
    // useEffect(() => {
    //     axios
    //         .post(`https://mocki.io/v1/e62b7cd4-587f-45ed-9c05-3ae5ec5785e2`),{
    //             age:age1
    //         }
    // }, []);

    // const asd = (evt) => {
    //     console.log(evt.target.value);
    // };

    // const asd = (evt) => {
    //     if (evt.target.scrollTop === 0) {
    //         console.log('top');
    //     }else if (evt.target.scrollTop >= 200) {
    //         console.log('bottom');

    //     }
    //     console.log(evt.target.scrollTop);
    // };
    return (
        <>
        <input type="text" onChange={age} />

            <button>Event</button>
        </>
    );
}

export default Ax;
