import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav style={{padding: "10px", backgroundColor: "lightblue"}}>
            <Link to="/" style={{marginRight: "10px"}} >Home</Link>
            <Link to="/about" style={{marginRight: "10px"}}>About</Link>
            <Link to="/contact" style={{marginRight: "10px"}}> Contact</Link>
            <Link to="/services" style={{marginRight: "10px"}}>Services</Link>
        </nav>
    );
   
}

export default NavBar;