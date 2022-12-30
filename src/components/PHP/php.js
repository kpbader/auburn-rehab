import './php.css';
import Fade from 'react-reveal/Fade';
import autumn from '../../assets/images/dex-ezekiel-1ieehMBvYhI-unsplash.jpg';
import nickR from '../../assets/images/nick-rickert-qx3ZAL-gYjY-unsplash.jpg';
import chrisO from '../../assets/images/cris-ovalle-YTk8tO3PGdA-unsplash.jpg';
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


function PHP() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="php-page">
            <div id="php-top">
                <Fade up>
                    <h2>Partial Hospitalization Program (PHP)</h2>
                    <p>Addiction can take a heavy toll on your life. It can disrupt your eating and sleeping patterns, stealing your health from you. They can cause you to do things that you would never have expected, such as lying about your substance use or stealing to fund your dependence. As a result of these actions, you may fear that you have permanently damaged your relationships with your loved ones. In such cases, you may feel that you have gone so far, done so many things, that it is impossible to go back.</p>
                    <p>Fortunately, our treatment programs give you the path to healing/recovery. Through our PHP program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
                </Fade>
            </div>
            <div id="php-two">
                <Fade left>
                    <LazyLoadImage src={autumn} alt="by Gavin Spears" />
                </Fade>
                <Fade right>
                    <div id="php-two-text">
                        <h2>What is a PHP?</h2>
                        <p>A treatment plan that can be highly beneficial for those who have supportive family members at home and responsibilities that they must maintain during the week, the partial hospitalization program offers structured addiction treatment that runs several hours daily throughout the week. Through this treatment option, you can participate in treatment sessions during the day and return to your home at night.</p>
                        <p>One of the first steps that you should take is to talk to our addiction treatment admissions team. They will provide a formal assessment to determine what level of treatment is right for your needs. For instance, we may recommend a partial hospitalization program if you meet these criteria:</p>
                        <li>You are medically stable</li>
                        <li>You're not at risk of harming others or yourself</li>
                        <li>You have difficulty functioning at school, work, or home</li>
                        <li>You're motivated to engage in our treatment program</li>
                        <li>You're experiencing co-occurring substance use disorders and mental health concerns</li>
                        <li>You have sufficient support in your home life</li>
                        <p>Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.</p>
                    </div>
                </Fade>
            </div>
            <div id="php-three">
                <Fade left>
                    <div id="php-three-text">
                        <h2>What to expect throughout the program</h2>
                        <p>Consisting of 5 hours of clinical services (5 days per week), the PHP has the highest level of care we provide. Throughout treatment, patients will participate in four daily group therapy sessions, as well as individual therapy at least once a week. Additionally, all patients meet with our medical director on a weekly basis to discuss medication management (if applicable).</p>
                        <p>Patients are served lunch between group sessions and can participate in weekly recovery outings as well. For anyone starting their journey to sobriety, this level of care is recommended, as it is best to have a strong foundation of support built.</p>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={nickR} alt="by Gavin Spears" />
                </Fade>
            </div>
            <div id="php-four">
                <Fade left>
                    <LazyLoadImage src={chrisO} alt="Alex Kramarevsky" />
                </Fade>
                <Fade right>
                    <div id="php-four-text">
                        <h2>Learn about our other programs</h2>
                        <p>At Auburn Rehab, we provide several other avenues of addiction treatment. In addition to our partial hospitalization program, we offer:</p>
                        <li>
                            <Link to="/iop" onClick={scrollToTop}>Intensive Outpatient Program</Link>
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

export default PHP;