import React from "react"
import "./LastComponent.css"
import IMAGES from "../images/images"


export default function LastComponent() {
const [week, setWeek] = React.useState(true)
const [month, setMonth] = React.useState(true)
const [year, setYear] = React.useState(true)

    const toggleWeek = () => setWeek(!week)

    const toggleMonth = () => setMonth(!month)

    const toggleYear = () => setYear(!year)
    

    return (
        <div className="lastComponent">
            <div className="main-1">    
                <img src={IMAGES.ad2} id="ad2"/>
                <h1>Choose the program</h1>
                <p>Choose the Payment Option that Works Best for You and Start Your Fitness Journey Today</p>
            </div>
            <div className="main-2">
                <img src={IMAGES.weekly} onClick={toggleWeek}/>
                <img src={IMAGES.monthly} onClick={toggleMonth}/>
                <img src={IMAGES.yearly} onClick={toggleYear}/>
            </div>
            <div className="plans">
                <img src={week ? IMAGES.basic : IMAGES.standard}/>
                <img src={month ? IMAGES.standard : IMAGES.basic}/>
                <img src={year ? IMAGES.exclusive : IMAGES.basic}/>
            </div>
        </div>
    )
}