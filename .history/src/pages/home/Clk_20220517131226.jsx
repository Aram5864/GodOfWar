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
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/902827f1-23ee-484f-b383-5ba4988de668/de2wsnx-d4985268-2e4f-49df-9a7c-9e002c1683b9.png" alt="" />
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
                            Less 

                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Clk;
