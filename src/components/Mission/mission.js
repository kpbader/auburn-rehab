import './mission.css';
import Fade from 'react-reveal/Fade';
import { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart, FaBriefcaseMedical } from "react-icons/fa";

function Mission () {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="mission-page">
            <div id="mission-top">
                <Fade up>
                    <h2>Our Mission</h2>
                    <p>Our mission is to create an environment where each individual has the right and opportunity to develop a solid foundation towards long-term sobriety. Beach Street Rehab will provide every individual a quiet, calm, and safe place to begin the journey.
                        It is our philosophy that in order to reduce the incidence and prevalence of substance abuse and other behavioral health problems among adults through the provision of addiction treatment services, each individual must be empowered to make decisions about their care with the expected outcome of an increased quality of life. </p>
                </Fade>
            </div>
            <div id="our-services">
                <Fade>
                    <div id="our-services-header">
                        <h3>What We Can Provide</h3>
                    </div>
                </Fade>
                <Fade up>
                    <div id="our-services-cards">
                        <Card>
                            <HiUserGroup className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Therapy and support groups for either addiction or mental health disorders
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaHandHoldingHeart className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Compassionate staff that is dedicated to your success
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaBriefcaseMedical className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Evidence-based practices that give you the best chance of recovery
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Fade>
            </div>
            <div id="bottom-contact-container">
                <Fade left>
                    <form id="contact-form">
                        <p id="hp-contact-form-header">Reach Out</p>
                        <div id="form-slot-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={name} name="name" />
                        </div>
                        <div id="form-slot-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" defaultValue={email} name="email" />
                        </div>
                        <div id="form-slot-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" defaultValue={message} rows="10" cols="45" />
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </Fade>
                <Fade right>
                    <div id="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.123933760937!2d-117.99304987206115!3d33.7057418689756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd26eebbbc61a1%3A0x905e876fb37add72!2s17682%20Beach%20Blvd%2C%20Huntington%20Beach%2C%20CA%2092647!5e0!3m2!1sen!2sus!4v1667939056139!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Mission;