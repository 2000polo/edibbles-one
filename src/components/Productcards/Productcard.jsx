import React,{useContext, useState} from 'react';
import "./Productcard.css"
// import Axios from "axios";
// import { createClient } from 'pexels';
import { globalDataContext } from '../../GlobalContext/GlobalContext';




const Productcard = () => {

    // const img = [];
    // img.push("9","10")
    // let id ;

    // const client = createClient("563492ad6f91700001000001669d37109b2a4cb9a9c260154cda7f36");
    // const query = 'food';

    // useEffect(() => {
    //     client.photos.search({ query, per_page: 1 }).then(ph => {
    //     // id = ph.photos[1].id;
    //     console.log(ph.photos[0]);
    //     img.push("ph.photos[0].id");
    // });
    // }, [])

    const {images} = useContext(globalDataContext);

    let fImage

    const[Checked, setChecked] = useState(true)

    console.log(Checked)

    return (
        <div className="product-card-wrapper">
            {
               
                images.map(image =>{
                    const randIndex = Math.floor(Math.random() * images.length);
                    fImage = images[randIndex];
                    console.log(image)
                    return(
                        <div className="product-card">
                            <p className="food-time-name">Breakfast</p>
                            <div className="food food-first" style={{backgroundImage:`url(`+image+`)`}}></div>
                            <div className="food food-first" style={{backgroundImage:`url(`+images[randIndex]+`)`}}></div>

                            <label class="label">
                                <div class="toggle">
                                    <input onClick={(e)=>{setChecked(!Checked)
                                    }} class="toggle-state" type="checkbox"  value={Checked} />
                                    <div class="indicator"></div>
                                </div>
                                <p className="food-time-name">Breakfast</p>
                            </label>
                            <p className="food-time-name">Breakfast</p>
                        </div>
                    )
                    
                })
            }
            
            {/* <div className="product-card">
                <div className="food food-first"></div>
                <div className="food food-first"></div>
            </div>
            <div className="product-card">
                <div className="food food-first"></div>
                <div className="food food-first"></div>
            </div>
            <div className="product-card">
                <div className="food food-first"></div>
                <div className="food food-first"></div>
            </div> */}
        </div>
    )
}

export default Productcard;