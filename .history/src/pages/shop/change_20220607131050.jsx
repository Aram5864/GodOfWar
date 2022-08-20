const Change = () => {

    const [count, setcount] = useState(1)

    const minus = () => {
        setcount
    };
    const plus = () => {

    };

    return (
        <>
            <button onClick={minus}>-</button>
            <h4></h4>
            <button onClick={plus}>+</button>
        </>
    );
};
