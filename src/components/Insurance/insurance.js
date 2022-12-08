import './insurance.css';
import BottomContact from '../Bottom-Contact/bottom-contact';
import anthem from '../../assets/images/Anthem-Inc-logo.png';
import beacon from '../../assets/images/beacon-logo.png';
import blueCross from '../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png';
import cigna from '../../assets/images/Cigna_logo.svg.png';
import molina from '../../assets/images/molina.png';
import mhn from '../../assets/images/MHN_insurance_logo-1280x720.jpeg';
import united from '../../assets/images/United-Healthcare-Logo.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Insurance () {

    return (
        <section id="insurance-page">
            <div id="insurance-top">
                <Fade up>
                    <div id="insurance-top-text">
                        <h2>Insurance</h2>
                        <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                        <button id="insurance-contact-btn">
                            <Link to="/contact">Contact Us</Link>
                        </button>
                    </div>
                </Fade>
            </div>
            <Fade up>
                <div id="insurance-logos">
                    <LazyLoadImage src={anthem} alt="logo" />
                    <LazyLoadImage src={beacon} alt="logo" />
                    <LazyLoadImage src={blueCross} alt="logo" />
                    <LazyLoadImage src={cigna} alt="logo" />
                    <LazyLoadImage src={molina} alt="logo" />
                    <LazyLoadImage src={mhn} alt="logo" />
                    <LazyLoadImage src={united} alt="logo" />
                </div>
            </Fade>
           <BottomContact />
        </section>
    )

};

export default Insurance;