import './iop.css';
import Fade from 'react-reveal/Fade';
import chrisM from '../../assets/images/chris-mongeau-ZRdSZeVKBaE-unsplash.jpg';
import francisco from '../../assets/images/francisco-g-unsplash.jpg';
import malith from '../../assets/images/malith-d-karunarathne-qIRJeKdieKA-unsplash.jpg';
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


function IOP() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="iop-page">
            <div id="iop-top">
                <Fade up>
                    <h2>Intensive Outpatient Program (IOP)</h2>
                    <p>Our IOP enables patients to continue their day-to-day regimen while simultaneously  undergoing our best possible care. Measured on a case-by-case basis, patients may live in our treatment center, in a sober living community, or at their own home.</p>
                    <p>At Auburn Rehab, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our intensive outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
                </Fade>
            </div>
            <div id="iop-two">
                <Fade left>
                    <LazyLoadImage src={chrisM} alt="by Gavin Spears" />
                </Fade>
                <Fade right>
                    <div id="iop-two-text">
                        <h2>Why choose an IOP?</h2>
                        <p>It is common for those struggling with addiction to not respond well to  residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.).</p>
                        <p>If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home.</p>
                    </div>
                </Fade>
            </div>
            <div id="iop-three">
                <Fade left>
                    <div id="iop-three-text">
                        <h2>What to expect throughout the program</h2>
                        <p>Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:</p>
                        <li>Art therapy</li>
                        <li>Hypnotherapy</li>
                        <li>Family therapy</li>
                        <li>Cognitive-behavioral therapy</li>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={francisco} alt="by Gavin Spears" />
                </Fade>
            </div>
            <div id="iop-four">
                <Fade left>
                    <LazyLoadImage src={malith} alt="Alex Kramarevsky" />
                </Fade>
                <Fade right>
                    <div id="iop-four-text">
                        <h2>Learn about our other programs</h2>
                        <p>At Auburn Rehab, we provide several other avenues of addiction treatment. In addition to our partial hospitalization program, we offer:</p>
                        <li>
                            <Link to="/php" onClick={scrollToTop}>Partial Hospitalization Program</Link>
                        </li>
                        <li>
                            <Link to="/op" onClick={scrollToTop}>Outpatient Program</Link>
                        </li>
                        <li>
                            <Link to="/jobs" onClick={scrollToTop}>Jobs Program</Link>
                        </li>
                        <p>Contact us today and start your journey to recovery. We are eager to help you overcome your addiction.</p>
                    </div>
                </Fade>
            </div>
            <BottomContact />
        </section>

    )
};

export default IOP;