// import { useReducer } from "react";

// const myReducer = (prevState, action) => {
//     let array;
//     switch (action.type) {
//         case "ADD":
//             array = [...prevState];
//             array.push(action.payload);
//             return array;
//         case "REMOVE":
//             array = [...prevState];
//             array.pop();
//             return array;
//         case "CLEAR":
//             return (prevState = []);
//         default:
//             break;
//     }
// };

// const Del = () => {
//     const [state, dispatcher] = useReducer(myReducer, ["skzbnakan ardyunq"]);

//     const avelacnel = () => {
//         dispatcher({
//             type: "ADD",
//             payload: Math.round(Math.random() * 100 + 100),
//         });
//     };
//     const jnjel = () => {
//         dispatcher({ type: "REMOVE" });
//     };
//     const jnjelsax = () => {
//         dispatcher({ type: "CLEAR" });
//     };

//     return (
//         <>
//             <hr />

//             <button onClick={avelacnel}>[+] Avelacnel</button>
//             <button onClick={jnjel}>[-] Jnjel</button>
//             <button onClick={jnjelsax}>[x] Maqrel Bolory</button>
//             <p>Ardyunq</p>
//             <p>
//                 <b>
//                     {state.length === 0 && "(Datark)"}
//                     {state.join(" - ")}
//                 </b>
//             </p>
//         </>
//     );
// };

// export default Del;

const Del = () => {
    const avelacnel = () => {};

    const Jnjel = () => {};
    const clear = () => {};
    return (
        <>
            <button onClick={avelacnel}>avelacnel</button>
            <button onClick={Jnjel}>Jnjel 1 hat</button>
            <button onClick={clear}>Jnjel bolory</button>
        </>
    );
};

export default Del;
