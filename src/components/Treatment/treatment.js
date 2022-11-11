import './treatment.css';
import Fade from 'react-reveal/Fade';
import franciscoG from '../../assets/images/francisco-g-unsplash.jpg';
import nickR from '../../assets/images/nick-rickert-qx3ZAL-gYjY-unsplash.jpg';
import lakeOne from '../../assets/images/daniel-roe-lpjb_UMOyx8-unsplash.jpg';
import { useState, useRef } from 'react';


function Treatment() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="treatment-page">
            <div id="treatment-top">
                <Fade up>
                    <h2>Treatment</h2>
                    <h3>Timelines</h3>
                    <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
                </Fade>
            </div>
            <div id="treatment-two">
                <Fade left>
                    <img src={franciscoG} alt="by Francisco Gonzalez" />
                </Fade>
                <Fade right>
                    <div id="treatment-two-text">
                        <h2>Key Areas/Fundamentals</h2>
                        <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.</p>
                        <li>Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.</li>
                        <li>Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc. </li>
                        <li>Counselor and client will set clear and tangible goals regarding above mentioned obstacles</li>
                        <li>Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals. </li>
                        <li>Counselor and client discuss systems for working through hurdles.</li>
                        <li>Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals. </li>
                    </div>
                </Fade>
            </div>
            <div id="treatment-three">
                <Fade left>
                    <div id="treatment-three-text">
                        <h2>Revisions</h2>
                        <p>As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary. </p>
                    </div>
                </Fade>
                <Fade right>
                    <img src={nickR} alt="by Nick Rickert" />
                </Fade>
            </div>
            <div id="treatment-four">
                <Fade left>
                <img src={lakeOne} alt="by Daniel Roe" />
                </Fade>
                <Fade right>
                    <div id="treatment-four-text">
                        <h2>Recreation</h2>
                        <p>During treatment we promote having fun in sobriety. Clients learn how to develop interests and hobbies that do not include drugs and alcohol. Clients must be cleared by the doctor to participate. Organized activities may include but are not limited to:</p>
                        <li>Movies</li>
                        <li>Bowling</li>
                        <li>Beach/lake activities</li>
                        <li>Miniature Golf</li>
                        <li>Bonfires</li>
                        <li>Amusement Parks</li>
                        <li>Sporting events</li>
                        <li>Hiking/Nature walks</li>
                        <li>Community pool</li>
                        <li>Sober events/fundraisers </li>
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

export default Treatment;