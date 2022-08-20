

axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
  const persons = res.data;
  this.setState({ persons });
})

function Ax() {
    return (
        <>
    <h1>axios</h1>
        </>
    )
}


export default Ax;