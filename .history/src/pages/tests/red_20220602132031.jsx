import { useReducer } from "react";

const myReducer = (prevState, action) => {
    let arr;

    if (action.type == "ADD") {
        arr = [...prevState];
        arr.push(action.peyload);
        return arr;
    } else if (action.type == "DEL") {
        arr = [...prevState];
        arr.pop();
        return arr;
    } else if (action.type == "CLEAR") {
        arr = [];
        return arr;
    }
 
    
};
const Del = () => {
    const [state, dispatcher] = useReducer(myReducer, ["Skzbnakan arjeq"]);
    const avelacnel = () => {
        dispatcher({
            type: "ADD",
            peyload: Math.floor(Math.random() * 100 + 10),
        });
    };

    const Jnjel = () => {
        dispatcher({
            type: "DEL",
        });
    };
    const clear = () => {
        dispatcher({
            type: "CLEAR",
        });
    };
    console.log(state);
    return (
        <>
            <button onClick={avelacnel}>avelacnel</button>
            <button onClick={Jnjel}>Jnjel 1 hat</button>
            <button onClick={clear}>Jnjel bolory</button>
            <button onClick={des}>Designy poxel</button>

            <hr />

            <p>
                {state.length === 0 && "<<Empty>>"}
                {state.join("-")}
            </p>
        </>
    );
};

export default Del;
