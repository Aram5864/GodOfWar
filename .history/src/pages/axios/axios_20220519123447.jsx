import axios from "axios";
import { useState } from "react";

function Ax() {
    const [data, setdata] = useState([]);

    // axios
    //     .get(`http://worldtimeapi.org/api/timezone/Asia/Yerevan`)
    //     .then((res) => {
    //         setdata(res.data);
    //     });

        console.log(data);
    return (
        <>
            <h1>axios</h1>
        </>
    );
}

export default Ax;
