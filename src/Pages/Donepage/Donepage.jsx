import React, { useContext } from 'react';
import { RiListCheck } from 'react-icons/ri';
import Donelist from '../../components/Donelist/Donelist';
import Navbar from '../../components/Navbar/Navbar';
import { globalDataContext } from '../../GlobalContext/GlobalContext';
import "./Donepage.css";

const Donepage = (props) => {

    // const { dateArray } = useContext(globalDataContext);
    console.log(props.dateArray)
    return (
        <div className="donepage-section-wrapper">
            <Navbar></Navbar>
            {
                props.dateArray.map((date, index)=> {
                    return(
                        index <= 5 &&
                        <div className="d-list">
                            <Donelist date={date} ></Donelist>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Donepage;
