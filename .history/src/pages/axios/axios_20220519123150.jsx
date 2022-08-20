import axios from "axios";

function Ax() {

    const [data, setdata] = useState([])

    axios.get(`http://worldtimeapi.org/api/timezone/Asia/Yerevan`)
    .then((res) => {
        const persons = ;
        setdata(res.data) 
    });

    return (
        <>
            <h1>axios</h1>
        </>
    );
}

export default Ax;
