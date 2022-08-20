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
                <img src="https://images.ctfassets.net/lnv7ao4c2jkb/6Jf6UwBytIerjri4FlVlD4/a822e36c27934f97f71bcbf044d55bfb/Icon_noshow.png?w=600&q=50" alt="" />
                <i className="fas fa-tag mr-2"></i>
                Podcast {count1}
            </button>
        </>
    );
};

export default Clk;
