import './mission.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';
import Card from 'react-bootstrap/Card';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart, FaBriefcaseMedical } from "react-icons/fa";

function Mission () {

    return (
        <section id="mission-page">
            <div id="mission-top">
                <Fade up>
                    <h2>Our Mission</h2>
                    <p>Our mission is to create an environment where each individual has the right and opportunity to develop a solid foundation towards long-term sobriety. Auburn Rehab will provide every individual a quiet, calm, and safe place to begin the journey.
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
            <BottomContact />
        </section>
    )
};

export default Mission;