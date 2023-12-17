import MyContext from "./Context";
import React from "react";
import { createContext } from "react";


const ContextDetails = (props) => {
    const [weatherInfo, setWeatherInfo] = React.useState(null);
    const value= {
        setWeatherInfo,
        weatherInfo
    }
    return(
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
    )
}

export default ContextDetails;