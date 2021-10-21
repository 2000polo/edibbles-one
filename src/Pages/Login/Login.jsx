import React from 'react';
// import Footer from '../../components/Footer/Footer';
import "./Login.css";
import {useHistory} from 'react-router-dom';

function Signin() {

    const history = useHistory();

    const home = () =>{
        history.push("/home")
    }
    return (
        <div className="signin-wrapper">

            <div className = "main-signin-wrapper">

                <div className="signin-section-wrapper">
                    <h2>Sign in</h2>
                    <div className="input-fields">
                        <input type="email" className="email-field" placeholder="Email or Phone number" />
                        <input type="password" className="password-field" placeholder="Password" />
                    </div>
                    <button onClick={()=>{home()}} className="s-signin">Sign in</button>

                    <div className="check-help">
                        <div className="check-box">
                            <input type="checkbox" />
                            <label htmlFor="">Remind me</label>
                        </div>

                        <p>Need help?</p>
                    </div>
                    
                </div>
            </div>

            {/* <Footer /> */}

        </div>
        
    )
}

export default Signin
