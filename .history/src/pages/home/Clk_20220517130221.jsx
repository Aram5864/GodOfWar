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
            flag ? <></>
        }
            
        </>
    );
};

export default Clk;
