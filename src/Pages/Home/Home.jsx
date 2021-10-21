import React, { useState, useContext } from 'react';
import Datebox from '../../components/Datebox/Datebox';
import Navbar from '../../components/Navbar/Navbar';
import Productcard from '../../components/Productcards/Productcard';
import { globalDataContext } from '../../GlobalContext/GlobalContext';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const { setDateBox, dateBox } = useContext(globalDataContext);

    const history = useHistory();

    const donePageHandler = () =>{
        history.push("/donepage");
    }

    return (
        <div className="home-section-wrapper">
            <Navbar></Navbar>
    
            <section className="banner-wrapper">
                <h4 className="banner-head">Choose your Dishes</h4>
                <p className="banner-para">As per your recomended calorie, choose your dishes from below</p>
            
                <div className="banner-btn">
                    <button className="def-menu">Choose Default Menu</button>
                </div>
            </section>

            <div className="date-food-card">

                <div className="select-date" onClick={()=>{setDateBox(!dateBox)}}>
                    <button className="sel-date">
                        Select Date
                    </button>
                </div>

                <div className="d-f" >
                    <Datebox></Datebox>
                    <Productcard></Productcard>
                </div>

                
                
                <div className="proceed-btn" onClick={()=>{donePageHandler()}}>
                    <button className="def-menu prcd-btn">Proceed</button>
                </div>
            </div>

            <section className="contact-section-wrapper">
                <h3 className="contact-section-heading">
                    Feel free to contact us for your customized meal plan
                </h3>
                <div className="form-wrapper">
                    <div className="form">
                    
                        <div className="row1">
                            <div className="input">
                                <label className="input-label">Your Name</label>
                                <input className="input-field" type="text" placeholder="Enter your name..." />
                            </div>
                            <div className="input">
                                <label className="input-label">Your Email</label>
                                <input className="input-field" type="text" placeholder="Enter your email-id..." />
                            </div>
                        </div>
                        <div className="row1">
                            <div className="input">
                                <label className="input-label">Your Mobile No.</label>
                                <input className="input-field" type="text" placeholder="Enter your Mobile no..." />
                            </div>
                            <div className="input">
                                <label className="input-label">Message</label>
                                <input className="input-field" type="text" placeholder="Type Something..." />
                            </div>
                        </div>
                
                    
                    </div>

                    <div className="form-btn">
                            <button className="submit-btn" >Send Now</button>
                    </div>
                </div>
                
            </section>

            <Footer></Footer>
            
        </div>
    )
}

export default Home;
