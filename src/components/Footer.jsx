import React from "react";
import "./Footer.css";
import IMAGES from "../images/images";

export default function Footer() {
    const [email, setEmail] = React.useState("");

    return (
        <footer className="footer">
            <div>
                <img src={IMAGES.image} className="image" />
                <img src={IMAGES.creator} className="creator" />
            </div>
            <div className="contact">
                <div className="footer-links">
                    <a href="/">
                        <img src={IMAGES.group} height="60px" />
                    </a>
                    <p className="motivate">
                        We&apos;re always in search for talented and <br /> motivated
                        people, Don&apos;t be shy introduce <br /> yourself
                    </p>

                    {/* <div className="links"> */}
                    <div className="logos">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={IMAGES.facebook} />{" "}
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src={IMAGES.instagram} />{" "}
                        </a>
                        <a href="https://www.twitter.com/" target="_blank">
                            <img src={IMAGES.twitter} />{" "}
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img src={IMAGES.linkedin} />{" "}
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <img src={IMAGES.youtube} />{" "}
                        </a>
                        <img src={IMAGES.contact} className="contact-btn" height="50px" />
                    </div>
                </div>
                <div className="useful">
                    <ul>
                        <li>
                            <h3>Useful Links</h3>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Kindergarden
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                University
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                GYM Coaching
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>

                    <ul className="carrier">
                        <li>
                            <h3>Contact Us</h3>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Become Teacher
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Instructor
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Course
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Carrier Page
                            </a>
                        </li>
                    </ul>

                    <div className="email">
                        <h3>Get Contact</h3>
                        <p>Phone: (406) 555-0120 </p>
                        <p>E-mail: sujalyadav9067@gmail.com</p>
                        <br />
                        <br />
                        <h3>Newsletter</h3>
                        <p>
                            2000+ Our students are subscribe around the world. <br />
                            Don't be shy introduce yourself!
                        </p>
                        <br />
                        <input type="text" placeholder="Enter Your Email Here" className="email-input" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <button
                            className="email-button"
                            onClick={() => {
                                if (email == "") {
                                    alert("Email Field Can't be Empty");
                                } else {
                                    alert(`DIGIFITNESS subscribed by "${email}"`);
                                    setEmail("");
                                }
                            }}
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* </div> */}
                </div>
            </div>
                <img src={IMAGES.last} className="last" />
        </footer>
    );
}
