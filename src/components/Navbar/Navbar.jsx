import React,{ useState } from 'react';
import './Navbar.css';
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai"
import { useHistory } from 'react-router-dom';

function Navbar() {

    const[menu, setMenu] = useState(false);

    const menuHandler = () => {
        setMenu(!menu);
        console.log(menu)
    }

    const history = useHistory();

    const homeHandler = () =>{
        history.push("/home");
        setMenu(!menu);
    }

    const loginHandler = () =>{
        history.push("/");
        console.log("clicked...")
    }
    
    return (
        <div className="navbar-section-wrapper">
            <nav>
                <ul className="links">
                    <li className="link" onClick={()=>{homeHandler()}}>HOME</li>
                    <li className="link">ABOUT US</li>
                    <li className="link">DIET PLAN</li>
                    <li className="link">SELECT YOUR PLANS</li>
                </ul>

                {
                    menu &&
                    <ul className="ham-links ">
                        <li className="link" onClick={()=>{homeHandler()}}>HOME</li>
                        <li className="link">ABOUT US</li>
                        <li className="link">DIET PLAN</li>
                        <li className="link">SELECT YOUR PLANS</li>
                    </ul>
                }
                

                <p className="logo">LoGO</p>

                <div className="nav-btns">
                    <button className="btn sign-btn" onclick={()=>{loginHandler()}}>Sign in</button>
                    <button className="btn reg-btn">Register</button>

                    <div className="menu" onClick={()=>{menuHandler()}}>
                        <IconContext.Provider value={{size:"24px", color:"black"}}>
                            <AiOutlineMenu></AiOutlineMenu>
                        </IconContext.Provider>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
