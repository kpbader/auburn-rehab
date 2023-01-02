import './insurance.css';
import BottomContact from '../Bottom-Contact/bottom-contact';
import aetna from "../../assets/images/0f0564f1-d965-4e82-9580-862fa8032906.png"
import anthem from '../../assets/images/Anthem-Inc-logo.png';
import beacon from '../../assets/images/beacon-logo.png';
import blueCross from '../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png';
import cigna from '../../assets/images/Cigna_logo.svg.png';
import horizon from '../../assets/images/horizon-logo.webp';
import optima from '../../assets/images/optima-health-inc-health-care-health-insurance-png-favpng-dumtEeQ0mCtUM1MyRcuN2YYzZ.webp';
import optum from '../../assets/images/4516741cOptum-logo-ora-RGB.webp';
import umr from '../../assets/images/umr-logo.webp'; 
import united from '../../assets/images/United-Healthcare-Logo.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

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
                    <img src={aetna} alt="logo" />
                    <img src={anthem} alt="logo" />
                    <img src={beacon} alt="logo" />
                    <img src={blueCross} alt="logo" />
                    <img src={cigna} alt="logo" />
                    <img src={horizon} alt="logo" />
                    <img src={optima} alt="logo" />
                    <img src={optum} alt="logo" />
                    <img src={umr} alt="logo" />
                    <img src={united} alt="logo" />
                </div>
            </Fade>
           <BottomContact />
        </section>
    )

};

export default Insurance;