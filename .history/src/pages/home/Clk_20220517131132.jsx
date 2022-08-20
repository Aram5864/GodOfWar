import { useState } from "react";
import style from "./Home.module.scss";

const Clk = ({ desc }) => {
    const [flag, setflag] = useState(true);

    const ShowLess = () => {
        setflag(!flag);
    };
    return (
        <>
            {flag ? (
                <>
                    <div className="postcard__preview-txt">
                        {desc.substring(0, 50)}{" "}
                        <button
                            onClick={ShowLess}
                            className={`${style.btn} tag__item`}
                        >
                            Show
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="postcard__preview-txt">
                        {desc}{" "}
                        <button
                            onClick={ShowLess}
                            className={`${style.btn} tag__item`}
                        >
                            Less <img src="https://www.freeiconspng.com/uploads/sword-png-24.png" alt="" />
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Clk;
