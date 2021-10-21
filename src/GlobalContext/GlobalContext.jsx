import { createContext, useState } from 'react';

export const globalDataContext = createContext(null);

const GlobalData = ({children}) => {

    const [dateBox, setDateBox] = useState(false);

    const images = [
        "https://images.pexels.com/photos/5836427/pexels-photo-5836427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4210862/pexels-photo-4210862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ]

    const dateArray = new Array();

    return(
        <globalDataContext.Provider value={{dateBox, setDateBox, images, dateArray}}>
            {children}
        </globalDataContext.Provider>
    )
}

export default GlobalData;