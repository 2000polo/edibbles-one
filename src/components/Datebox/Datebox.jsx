import React,{ useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react/cjs/react.development';
import { globalDataContext } from '../../GlobalContext/GlobalContext';
import Checkbox from '../Checkbox/Checkbox';
import './Datebox.css';

const Datebox = (props) => {

    const { dateBox, setDateBox, dateArray } = useContext(globalDataContext)

    // const pDate = new Date()
    // pDate.setDate(pDate.getDate());
    // const formatDate = (date) => {
    //     const day = date.getDate();
    //     const month = date.getMonth()+1;
    //     const year = date.getFullYear();
    //     const formatedDate = +day +"/"+ month +"/"+ year
    //     return formatedDate
    // }
    // const nDate = new Date()

    // const sixDaysAfterCurrentDate = () => {
    //     for (var i=1; i<=6; i++){
    //         pDate.setDate(pDate.getDate() + 1);
    //         console.log(formatDate(pDate));
    //         dateArray.push(formatDate(pDate))
    //     }
    // }

    // sixDaysAfterCurrentDate()
    // console.log(dateArray)
    var id = 0;

    return (

            <div className="date-box-wrapper">
                <div className="date-box">
                    <div className="close">
                        <IconContext.Provider value={{size:"20px", color:"White" , className:"into"}}>
                            <AiOutlineClose></AiOutlineClose>
                        </IconContext.Provider>
                    </div>
                    {
                        dateArray.map((date, index)=>{
                            return (
                                index <= 5 &&
                                <Checkbox date={date} id={id=id+1}></Checkbox>      
                            )
                        })
                    }

                    <button className="custom-date">Select <br /> Custom Date</button>
                    
                </div>

                {
                    dateBox &&

                    <div className="date-box1">
                        <div className="close" onClick={()=>setDateBox(!dateBox)}>
                            <IconContext.Provider value={{size:"20px", color:"White" , className:"into"}}>
                                <AiOutlineClose></AiOutlineClose>
                            </IconContext.Provider>
                        </div>
                        {
                            dateArray.map((date, index)=>{
                                return (
                                    index <= 5 &&
                                    <Checkbox date={date} id={id=id+1}></Checkbox>      
                                )
                            })
                        }

                        <button className="custom-date">Select <br /> Custom Date</button>
                    </div>

                }
                
            </div>
        
    )
}

export default Datebox;
