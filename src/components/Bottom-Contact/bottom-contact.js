import './bottom-contact.css';
import ContactForm from '../Contact-Form/contact-form';
import Fade from 'react-reveal';

function BottomContact() {

    return (
        <section id="bottom-contact-container">
            <Fade left>
                <ContactForm />
            </Fade>
            <Fade right>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.039987251873!2d-121.36404652396598!3d38.64796087177841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad936caff4339%3A0xf9e222a3f0f054cc!2s4441%20Auburn%20Blvd%20%23%20P%2C%20Sacramento%2C%20CA%2095841!5e0!3m2!1sen!2sus!4v1670438030117!5m2!1sen!2sus" width="600" height="450" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Fade>
        </section>
    )
}

export default BottomContact;