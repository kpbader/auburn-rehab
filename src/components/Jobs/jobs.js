import './jobs.css';
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';


function Jobs() {

    return (
        <section id="jobs-page">
            <div id="jobs-main-section">
                <Fade up>
                    <h2>Jobs Program</h2>
                    <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.</p>
                    <p> Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.</p>
                    <p>For more information for our Jobs Program, visit <a href="https://www.transitionsfortomorrow.org/" target="_blank" rel="noopener noreferrer">here</a></p>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
}

export default Jobs;