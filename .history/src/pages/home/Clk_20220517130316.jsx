import { useState } from "react";
import style from "./Home.module.scss";

const Clk = ({ desc }) => {
    const [count1, setcount1] = useState(0);
    const [flag, setflag] = useState(true);

    const count = () => {
        setcount1(count1 + 1);
    };
    return (
        <>
        {
            flag ? <>
                        <div className="postcard__preview-txt">
                            {desc}
                        </div>

                        <button onClick={count} 
                                className={`${style.btn} tag__item`
                                }>
                            Show {count1}
                        </button>
                    </>
                  : <>
                    
                    </> 
        }
            
        </>
    );
};

export default Clk;
