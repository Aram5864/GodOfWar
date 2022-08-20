import { useState } from "react";
import style from "./Home.module.scss";

const Clk = ({desc}) => {
    const [count1, setcount1] = useState(0);

    const count = () => {
        setcount1(count1 + 1);
    };
    return (
        <>
           <div className="postcard__preview-txt">
                {desc}                       
            </div>
            <button onClick={count} className={`${style.btn} tag__item`}>
                <img src="https://cdn4.iconfinder.com/data/icons/basic-mobile-app-ui/50/04-59-round-arrow-up-512.png" alt="" />
                <i className="fas fa-tag mr-2"></i>
                Podcast {count1}
            </button>
        </>
    );
};

export default Clk;
