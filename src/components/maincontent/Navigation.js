import { Nav, Container, Navbar, NavLink } from 'react-bootstrap';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Navigation = () =>{

    const menuData = [
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/tabelkegiatan",
            name:"Tabel Kegiatan"
        },
        {
            path:"/nilai",
            name:"Nilai"
        },
        {
            path:"/about",
            name:"About"
        }
    ]
    return(
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt =""
                    />{'  '}
                    SDM Polda Riau
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" variant="pills">
                        {
                            menuData.map((item) => (
                                <NavLink as={Link} to={item.path} key={item.name}>
                                    <div className="list_item">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;