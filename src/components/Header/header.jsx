import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"
import { useState } from "react";
import { useEffect } from "react";
import { data, Link } from "react-router-dom";
function Header(){
  // const [product,setproduct]=useState(()=>{
  //   return JSON.parse(localStorage.getItem("cards")) || [];
  // });
  // console.log(product.length)
      const [numberproduct,setnumberproduct]=useState([]);
    const [numberfav,setnumberfav]=useState([]);
 useEffect(() => {
  const interval = setInterval(() => {
    let data = JSON.parse(localStorage.getItem("cards")) || [];
    let favdata = JSON.parse(localStorage.getItem("favcards")) || [];

    setnumberproduct(data);
    setnumberfav(favdata);
  }, 500);

  return () => clearInterval(interval);
}, []);
let gettop=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
    

    return(
        <>
        <div className="header">
               <Navbar expand="lg" className=" nav">
     <Container>
  <Navbar.Brand><img src={Logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">

      <Link to="/" className="nav-link" onClick={gettop}>Home</Link>
      <Link to="/shop" className="nav-link" onClick={gettop}>Shop</Link>
      <Link to="/blog" className="nav-link" onClick={gettop}>Blog</Link>
<Link to="/blogdetails" className="nav-link" onClick={gettop}>Blog Details</Link>
      <Nav.Link>
        <div className="icon">
          <Link to="/elements" className="nav-link p-0">
            <i className="fa-brands fa-shopify" onClick={gettop}></i>
          </Link>
          <span className="frist">{numberproduct.length}</span>
        </div>
      </Nav.Link>

      <Nav.Link>
        <div className="icon">
          <Link to="/fav" className="nav-link p-0">
            <i className="fa-solid fa-heart" onClick={gettop}></i>
          </Link>
          <span className="frist">{numberfav.length}</span>
        </div>
      </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Container>
    </Navbar>

        </div>
        </>
    )
}
export default Header