import {Container, Navbar} from 'react-bootstrap';


const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">SDM POLDA RIAU</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Copyright Allright<a href="/" className='text-decoration-none'> 2022</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    );

}

export default Footer;