import React from 'react';
import './Checkbox.css';

const Checkbox = (props) => {

    // console.log(props.id);
    return (
        <div className="checkbox-wrapper">
            <svg className="checkbox-symbol" style={{display:"none"}}>
                <symbol id="check" viewbox="0 0 12 10">
                    <polyline
                    points="1.5 6 4.5 9 10.5 1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    ></polyline>
                </symbol>
            </svg>

            <div className="checkbox-container">
                <input value={props.date} className="checkbox-input" id={props.id} type="checkbox" />
                <label onClick={(e)=>{console.log(e)}} className="checkbox"  for={props.id}>
                    <span>
                    <svg width="12px" height="10px">
                        <use href="#check"></use>
                    </svg>
                    </span>
                    <span>{props.date}</span>
                </label>
            </div>
        </div>
    )
}

export default Checkbox;