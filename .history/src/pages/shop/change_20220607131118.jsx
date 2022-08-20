const Change = () => {

    const [count, setcount] = useState(1)

    const minus = () => {
        setcount(count - 1);
    };
    const plus = () => {
        setcount(count + 1);

    };

    return (
        <>
            <button onClick={minus}>-</button>
            <h4></h4>
            <button onClick={plus}>+</button>
        </>
    );
};


export default