import React from "react"
import "./Body.css"
import { DefaultPlayer as Video } from 'react-html5video'
import "react-html5video/dist/styles.css"
import IMAGES from "../images/images"

export default function Body() {

    return (
        <>
            <div className="body-top">
                <div className="content">
                    <h1 className="discovery">Discover a Better <br></br> Way to Get Fit with</h1>
                    <img src={IMAGES.stylish} width='490px' className="stylish" />
                    <div className="btn-course">
                        <img src={IMAGES.course} height="49px" className="course-btn" />
                        <img src={IMAGES.about} className="about-btn" height="49px" />
                    </div>
                </div>
                <Video className="video1">
                    <source src={IMAGES.video1}></source>
                </Video>

            </div>
            <div className="top-2">
                <img src={IMAGES.tag} height="40px" className="tag" />
                <h1 className="heading-main">Experience Exceptional Training with Our Certified <br></br> <span className="heading-2-1">Fitness Pros</span></h1>
                <h5 className="heading-3">Transform your fitness with our certified and experienced trainers.</h5>
                <div className="tr-ima">
                    <img src={IMAGES.tr1} />
                    <img src={IMAGES.tr2} />
                    <img src={IMAGES.tr3} />
                    <img src={IMAGES.tr4} />
                </div>
                <div className="top-3">
                    <div className="chpr">
                        <h1 className="top-3-1">Choose the Program</h1>
                        <h3 className="top-3-2">Are You Want to Change your life?</h3>
                    </div>
                    <img src={IMAGES.expand} height="55px" />
                </div>
            </div>
        </>
    )
}