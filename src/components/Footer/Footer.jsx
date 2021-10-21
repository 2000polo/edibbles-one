import React from 'react';
import { IconContext } from 'react-icons';
import { RiWhatsappFill, RiFacebookCircleFill, RiTwitterFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer-main-wrapper">
            <div className="footer-wrapper">
                <div className="logo-f">
                    <h3 className="f-logo">
                        LoGO
                    </h3>
                </div>

                <div className="footer-contents">
                    <div className="f-row">
                        <div className="f-col">
                            <p className="f-head">ADRESS</p>
                            <p className="f-cont">
                                Edible Kitchen Services <br/>
                                JN Stadium, Kaloor <br/>
                                Kochi - 6806644
                            </p>
                        </div>
                        <div className="f-col">
                            <p className="f-head">PHONE</p>
                            <p className="f-cont">
                                0123-342-4563
                            </p>
                        </div>
                    </div>
                    <div className="f-row">
                        <div className="f-col">
                            <p className="f-head">QUICK LINKS</p>
                            <ul className="f-links">
                                <li className="link-f">My Account</li>
                                <li className="link-f">About</li>
                                <li className="link-f">Keto Plans</li>
                                <li className="link-f">Our Dishes</li>
                            </ul>
                        </div>
                        <div className="f-col">
                            <p className="f-head">FOLLOW US</p>
                            <span className="social-links">
                                <IconContext.Provider value={{size:"24px", color:"grey"}}>
                                    <RiWhatsappFill></RiWhatsappFill>
                                </IconContext.Provider>
                                <IconContext.Provider value={{size:"24px", color:"grey"}}>
                                    <RiFacebookCircleFill></RiFacebookCircleFill>
                                </IconContext.Provider>
                                <IconContext.Provider value={{size:"24px", color:"grey"}}>
                                    <RiTwitterFill></RiTwitterFill>
                                </IconContext.Provider>
                                <IconContext.Provider value={{size:"24px", color:"grey"}}>
                                    <RiInstagramFill></RiInstagramFill>
                                </IconContext.Provider>
                                <IconContext.Provider value={{size:"24px", color:"grey"}}>
                                    <RiYoutubeFill></RiYoutubeFill>
                                </IconContext.Provider>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
