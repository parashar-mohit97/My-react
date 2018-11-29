import React from "react";
import { store } from "./store";
import { setCountIncrement } from "./action";
import { setCountDecrement } from "./action";

const ButtonGroup = ({operation}) =>    {
    <div>
    {operation.map((op, i)=>(
        <button
        data-tech={op}
        key={'btn-${i}'}
        className="hello-btn"
        onClick={dispatchBtnAction}
        >
        {op}
        </button>
        
    ))}
</div>
};

function dispatchBtnAction(e){
    const action = e.target.dataset.op;
    if (action==="Increment")
    {
        return(
            store.dispatch(setCountIncrement(action))
        ) 
    }
    else
    {
        return(
            store.dispatch(setCountDecrement(action))
        ) 
    }
   /* const op = e.target.dataset.op;
    store.dispatch(setCount(op));*/
    /*return(
        e.target.dataset.op
    )*/
    }

export default ButtonGroup;