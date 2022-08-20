import axios from "axios";
import { useEffect, useState } from "react";
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
}

function Ax() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mocki.io/v1/e62b7cd4-587f-45ed-9c05-3ae5ec5785e2`)
            .then((res) => {
                setdata(res.data);
            });
    }, []);

    const asd = () => {
        alert(' success');
    };
    return (
        <>
            <input type="text" onCopy={asd} />
            <button>Event</button>
        </>
    );
}

export default Ax;
