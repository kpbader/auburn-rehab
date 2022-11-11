import './navigation.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation () {

    return (
        <section id="nav-bar">
        {/* <img /> */}
        <header>Auburn Rehab</header> 
        <Nav id="main-nav-links">
            <Nav.Item>
                <Nav.Link>
                    <Link to="/" className="header-nav-tab">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/mission" className="header-nav-tab">Mission</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/about" className="header-nav-tab">About</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/contact" className="header-nav-tab">Contact</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </section>

    )
};

export default Navigation;