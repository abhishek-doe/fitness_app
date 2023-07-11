import React from "react" 
import Header from "./components/Header";
import Body from "./components/Body";
import BodyTwo from "./components/BodyTwo";
import LastComponent from "./components/LastComponent";
import Footer from "./components/Footer"
import "./MainPage.css"

export default function MainPage() {

    return (
        <div className="container">
            <Header />
            <Body />
            <BodyTwo />
            <LastComponent />
            <Footer />
        </div>
    )
}