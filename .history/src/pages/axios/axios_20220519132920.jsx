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

    useEffect(() => {
        axios
            .get(`https://mocki.io/v1/e62b7cd4-587f-45ed-9c05-3ae5ec5785e2`)
            .then((res) => {
                setdata(res.data);
            });
    }, []);

    // const asd = (evt) => {
    //     console.log(evt.target.value);
    // };

    const asd = (evt) => {
        console.log(evt);
    };
    return (
        <>
        <p onScroll={asd} className="asdasdasd"> 

        </p>
          
            <button>Event</button>
        </>
    );
}

export default Ax;