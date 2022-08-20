import { useReducer } from "react";

const myReducer = (prevState, action) => {
    let array;
    switch (action.type) {
        case 'ADD':
            array = [...prevState];
            array.push(action.payload);
            return array;
        case 'REMOVE':
            array = [...prevState];
            array.pop();
            return array;
        case 'CLEAR':
            return prevState = [];
        default:
            break;
    }
};

const Del = () => {
    const [state, dispatcher] = useReducer(myReducer, ['skzbnakan ardyunq']);
    
    const avelacnel = () => {
        dispatcher({ type: 'ADD', payload: Math.round((Math.random() * 100 + 100)) });
    };
    const jnjel = () => {
        dispatcher({ type: 'REMOVE' });
    };
    const jnjelsax = () => {
        dispatcher({ type: 'CLEAR' });
    };

    return (
        <>
            <hr />

            <button 
            onClick={
                avelacnel
            }
            >
                [+] Avelacnel
            </button>
            