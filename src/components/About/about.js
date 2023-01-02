import './about.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';

function About() {

    return (
        <section id="about-page">
            <div id="about-top">
                <Fade up>
                    <h2>About Us</h2>
                    <p>Auburn Rehab provides a quiet, calm, and safe place to journey towards healing. We believe that in reducing substance abuse and other behavioral health complications among adults by providing addiction treatment services.</p>
                    <p>We understand each person must be empowered to make the right decisions about their care and improve your quality of life. That's why our team focuses on getting you set up with the right treatment program that works for you.</p>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default About;

