import './about.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';

function About() {

    return (
        <section id="about-page">
            <div id="about-top">
                <Fade up>
                    <h2>About Us</h2>
                    <p>Coming soon!</p>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default About;

