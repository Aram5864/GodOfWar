import axios from "axios";

function Ax() {
    axios.get(`http://worldtimeapi.org/api/timezone/Asia/Yerevan`).then((res) => {
        const persons = res.data;
        this.setState({ persons });
    });

    return (
        <>
            <h1>axios</h1>
        </>
    );
}

export default Ax;
