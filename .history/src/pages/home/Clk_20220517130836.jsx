import { useState } from "react";
import style from "./Home.module.scss";

const Clk = ({ desc }) => {
    const [count1, setcount1] = useState(0);
    const [flag, setflag] = useState(true);

    const count = () => {
        setflag(!flag);
    };
    return (
        <>
            {flag ? (
                <>
                    <div className="postcard__preview-txt">
                        {desc.substring(0, 50)}{" "}
                        <button
                            onClick={count}
                            className={`${style.btn} tag__item`}
                        >
                            <img src="https://cdn.pixabay.com/photo/2021/02/21/13/46/espada-del-caos-6036405_640.png" alt="" /> 
                            {count1}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="postcard__preview-txt">
                        {desc}{" "}
                        <button
                            onClick={count}
                            className={`${style.btn} tag__item`}
                        >
                            Less {count1}
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Clk;
