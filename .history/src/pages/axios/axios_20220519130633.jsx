import axios from "axios";
import { useEffect, useState } from "react";

function Ax() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mocki.io/v1/e62b7cd4-587f-45ed-9c05-3ae5ec5785e2`)
            .then((res) => {
                setdata(res.data);
            });
    }, []);


    const asd = (evt) =>{
        console.log('52')
    }

    return (
        <>
            {/* {data.map((item) => {
                return <h1>{item.name}</h1>;
            })} */}


{
 /* onMouseEnter */
 /* onClick */
 /* onChange onKeyDown */
 /* onKeyUp */
 
}

<input type="text"  onKeyDown={asd}/>
            <button >
                Event
            </button>
        </>
    );
}

export default Ax;
