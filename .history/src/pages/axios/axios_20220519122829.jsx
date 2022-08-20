import axios from "axios";



function Ax() {


    axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
  const persons = res.data;
  this.setState({ persons });
})


    return (
        <>
    <h1>axios</h1>
        </>
    )
}


export default Ax;