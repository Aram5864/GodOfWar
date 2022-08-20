import style from "./Home.module.scss";

const Clk = ({ count1 }) => {
    const [count1, setcount1] = useState(0)

    const count = () => {
        setcount1(count1 + 1);
    };
    return (
        <>
            <button onClick={count} className={`${style.btn} tag__item`}>
                <i className="fas fa-tag mr-2"></i>
                Podcast {count1}
            </button>
        </>
    );
};

export default Clk;
