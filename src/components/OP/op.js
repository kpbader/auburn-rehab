import './op.css';
import Fade from 'react-reveal/Fade';
// import crescentMoon from '../../assets/images/gavin-spear-unsplash.jpg';
// import coastalSun from '../../assets/images/coastal-sunset-1.jpeg';
// import desertRocks from '../../assets/images/alex-kramarevsky-unsplash.jpg';
import levan from '../../assets/images/levan-badzgaradze-xoeljsx5CD4-unsplash.jpg';
import jesper from '../../assets/images/jesper-kronholm-CMIDk3a8VHQ-unsplash.jpg';
import todorov from '../../assets/images/tsvetelin-todorov-vYBPW6mas7A-unsplash.jpg';
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


function OP() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="op-page">
            <div id="op-top">
                <Fade up>
                    <h2>Outpatient Program (OP)</h2>
                    <p>The least intensive program we provide, the outpatient program does not require overnight stays at our facilities. And although there is less time required for therapy sessions per week, we instill a high level of accountability for our patients in order for them to succeed in their journey to sobriety.</p>
                    <p>At Auburn Rehab, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
                </Fade>
            </div>
            <div id="op-two">
                <Fade left>
                    <LazyLoadImage src={todorov} alt="by T Todorov" />
                </Fade>
                <Fade right>
                    <div id="op-two-text">
                        <h2>What to expect during the program</h2>
                        <p>Considered the final step in the treatment plan, the outpatient program has patients attend three group therapy sessions per week with one individual session as well. Other therapeutic options that are involved:</p>
                        <li>Cognitive-behavioral therapy</li>
                        <li>Family therapy</li>
                        <li>Art therapy</li>
                        <li>Hypnotherapy</li>
                        <p>Near conclusion, patients and their case manager work together to plan a proper discharge. For most cases, it is advised that the outpatient program should not be the first step in one’s journey to recovery. For other options, please visit our full list of treatment options.</p>
                    </div>
                </Fade>
            </div>
            <div id="op-three">
                <Fade left>
                    <div id="op-three-text">
                        <h2>Sober Living</h2>
                        <p>For many reasons, patients don’t always have a stable home-environment to return to after treatment. For these cases, we offer sober living homes in which patients can continue to strengthen themselves even further post-treatment.</p>
                        <p>At our sober living homes, structure and accountability are at the patients’ side. The combination of our outpatient program with a transition to sober living communities boosts the success of our patients’ journey to sobriety.</p>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={jesper} alt="by Gavin Spears" />
                </Fade>
            </div>
            <div id="op-four">
                <Fade left>
                    <LazyLoadImage src={levan} alt="Alex Kramarevsky" />
                </Fade>
                <Fade right>
                    <div id="op-four-text">
                        <h2>Learn about our other programs</h2>
                        <p>At Auburn Rehab, we provide several other avenues of addiction treatment. In addition to our partial hospitalization program, we offer:</p>
                        <li>
                            <Link to="/php" onClick={scrollToTop}>Partial Hospitalization Program</Link>
                        </li>
                        <li>
                            <Link to="/iop" onClick={scrollToTop}>Intensive Outpatient Program</Link>
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

export default OP;