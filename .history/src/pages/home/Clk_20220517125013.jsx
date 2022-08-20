const Clk = () => {
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
