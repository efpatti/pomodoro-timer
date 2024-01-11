import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { CheckCircleFill } from "react-bootstrap-icons";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="borda">
      <Container>
        <Navbar.Brand href="#" className="logo text-white">
          <CheckCircleFill
            color="white"
            size={20}
            className="circle"
          ></CheckCircleFill>
          Ilelofocus
        </Navbar.Brand>
      </Container>
      <hr></hr>
    </Navbar>
  );
}

export default NavBar;
