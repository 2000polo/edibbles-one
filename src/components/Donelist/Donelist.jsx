import React,{ useContext } from 'react';
import { globalDataContext } from '../../GlobalContext/GlobalContext';
import "./Donelist.css";

const Donelist = (props) => {

    const {images} = useContext(globalDataContext);

    return(
        <div className="done-list-main-wrapper">
            {/* <div className="dummy"></div> */}
            <div className="date">
                <p className="dt">{props.date}</p>
            </div>
            <div className="done-list">
                
                {/* items should be loop */}

                {
                    images.map(image=>{
                        return(
                            <div className="done-card">
                                <h5 className="d-card-head">
                                    Breakefast
                                </h5>
                                <div className="food-image" style={{backgroundImage:`url(`+image+`)`}}></div>
                                <p className="pic-caption">
                                    Food Name
                                </p>
                            </div>
                        )
                    })
                    
                }

                
            </div>
        </div>
    )
}

export default Donelist;