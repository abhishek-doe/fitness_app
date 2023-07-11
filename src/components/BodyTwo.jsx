import "./BodyTwo.css"
import React from "react"
import cards from "./card"
import IMAGES from "../images/images"
import 'react-html5video/dist/styles.css'
import { DefaultPlayer as Video } from "react-html5video"
import videoCard from "./videoCard"
import video2 from "../images/video2.png"

export default function BodyTwo() {

    const tutElement = cards && cards.map(data => {
        const { id, image, description } = data
        return (
            <div key={id} className="tut1">
                <img src={image} key={id} className="image"/>
                <h3>{description}</h3>
                <img src={IMAGES.arrow}  className="arrow" height="10px" />
            </div>
        )
    })

    const cardElement = videoCard.map(card => {
        return (
            <div className="card" key={card.id}>
                <Video poster={card.poster} className="cardVideo">
                        <source src={card.img} type="video/webm"></source>
                </Video>
                <img src={card.content} />
            </div>
        )
    })

    return (
        <>
            <div className="bodyTwo">
                <div className="bodyTwo-img">
                    <img src={IMAGES.card1} />
                    <img src={IMAGES.card2} />
                    <img src={IMAGES.card3} />
                    <img src={IMAGES.card4} />
                    <img src={IMAGES.card5} />
                    <img src={IMAGES.card6} />
                </div>
                <img src={IMAGES.tag2} className="tag2" />
                <h2 className="discover">Discover why <span> DigiFitness </span> is the best choice for your fitness journey. With expert instructors, <br /> innovative courses, and a commitment to your success, we're here to help you reach your goals.</h2>
                <img src={IMAGES.skill}  className="skill" />
                <img src={IMAGES.offer} className="offer" />
                <div className="expand">
                    <h1>Course Content</h1>
                    <h3>32 Sections&#160;376 Lectures&#160;27h 8m total length</h3>
                </div>
                <img src={IMAGES.expand} height="50px" className="btn-expand" />

                <div className="course">
                    <Video className="video" poster={video2}>
                        <source src={IMAGES.video} type="video/webm"></source>
                    </Video>
                </div>
                    <div className="tutorial">
                        {tutElement}
                        
                    </div>
                <img src={IMAGES.videoContent} height="110vw" className="video-detail" />
                <img src={IMAGES.btnCourse} className="btn-go-course" height="60px" />
            </div>

            <div>
                <img src={IMAGES.client} className="clients" />
            </div>

            <div className="popular">
                <img src={IMAGES.tag3} />
                <h1>Most Popular Courses</h1>
            </div>
            <img src={IMAGES.expandP} className="expandPopular" />
            <div className="testimonials">


                <div className="cardElement">
                {cardElement}
                </div>

                <h1>Our Course Testimonials</h1>
                <h3>Hear from Our Satisfied Customers and Discover the Transformative Power of <span className="green">Digifitness</span></h3>
                <div className="test-images">
                    <img src={IMAGES.test1}/>
                    <img src={IMAGES.test2}/>
                    <img src={IMAGES.test3}/>
                    <img src={IMAGES.test1}/>
                    <img src={IMAGES.test2}/>
                    <img src={IMAGES.test3}/>
                    <img src={IMAGES.test1}/>
                    <img src={IMAGES.test2}/>
                    <img src={IMAGES.test3}/>

                </div>
            </div>


        </>
    )

}