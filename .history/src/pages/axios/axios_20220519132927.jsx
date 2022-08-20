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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa nam eveniet tempore fuga maiores nulla voluptate porro quis officia. Illum sed aspernatur voluptatem quasi aliquid dignissimos unde error atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio alias consectetur amet vel magni dolor fuga numquam qui doloremque nostrum corporis eum, mollitia iusto saepe eos quibusdam quisquam nisi.
            lor
        </p>
          
            <button>Event</button>
        </>
    );
}

export default Ax;
