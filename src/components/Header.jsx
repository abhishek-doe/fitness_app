import React from "react";
import "./Header.css";
import IMAGES from "../images/images.jsx"
import { Link } from "react-router-dom"

export default function Header() {
    const [engine, setEngine] = React.useState("")

    return (
        <div className="navbar">
            <header className="header">
                <img src={IMAGES.Group} alt="nav-main-logo" height="50px" className="main-logo" />
                <img src={IMAGES.tline} alt="nav-tline" height="40px" className="main-tline" onClick={() => {
                    document.getElementById("input").focus()
                }} />

                <input type="text" placeholder="Search your Fitness Course" className="search-bar" onChange={e => setEngine(e.target.value)} value={engine} id="input" />

                <img
                    src={IMAGES.search}
                    alt="nav-search"
                    height="40px"
                    className="main-search"
                    onClick={() => {
                        if (engine == "") {
                            alert("Search Field Can't be Empty")
                        } else {
                            alert(`You Searched "${engine}"`)
                            setEngine("")
                        }
                    }} />
                <Link to="/signin">
                    <img src={IMAGES.signin} alt="nav-signin" height="40px" className="main-signin" />
                </Link>
                <Link to="/signup">
                    <img src={IMAGES.signup} alt="nav-signup" height="40px" className="main-signup" />
                </Link>
            </header>

            <div className="nav2">
                <h5>HOME </h5>
                <div className="about">
                    <h5>WORKOUTS <img src={IMAGES.vector} /> </h5>
                    <div className="about-content">
                        <a href="#">WORKOUT VIDEOS</a>
                        <a href="#">CUSTOM WORKOUTS</a>
                    </div>
                </div>

                <div className="about">
                    <h5>PROGRAMS <img src={IMAGES.vector} /> </h5>
                    <div className="about-content">
                        <a href="#">WORKOUT PROGRAMS</a>
                        <a href="#">MEAL PLANS</a>
                        <a href="#">PILOT PROGRAMS</a>
                        <a href="#">ROUTINES</a>
                    </div>
                </div>

                <div className="about">
                    <h5>HEALTHY LIVING <img src={IMAGES.vector} /> </h5>
                    <div className="about-content">
                        <a href="#">EXPERT ARTICLES</a>
                        <a href="#">HEALTHY RECIPES</a>
                        <a href="#">WELLNESS VIDEOS</a>
                    </div>
                </div>

                <div className="about">
                    <h5>COMMUNITY <img src={IMAGES.vector} /> </h5>
                    <div className="about-content">
                        <a href="#">COMMUNITY</a>
                        <a href="#">BLOG</a>
                        <a href="#">WHAT'S NEW</a>
                    </div>
                </div>

                <div className="about">
                    <h5>ABOUT <img src={IMAGES.vector} /> </h5>
                    <div className="about-content">
                        <a href="#">ABOUT</a>
                        <a href="#">CAREERS</a>
                        <a href="#">TUTORIALS</a>
                        <a href="#">OUR TEAM</a>
                        <a href="#">TEESTIMONIALS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}