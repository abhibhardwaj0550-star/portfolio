import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import theme_pattern from '../../assets/pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import menu_open from '../../assets/menu.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
const menuRef = useRef();

const openMenu =() => {
  menuRef.current.style.right="0";
}
const closeMenu =() => {
  menuRef.current.style.right="-350px";
}


  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mab-close'/>

        <li> <AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink> {menu === "home" ? <img src={theme_pattern} alt='' /> : <></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={() => setMenu("about")}>About Me</p></AnchorLink>  {menu === "about" ? <img src={theme_pattern} alt='' /> : <></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#skills'> <p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>  {menu === "skills" ? <img src={theme_pattern} alt='' /> : <></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#portfolio'> <p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>  {menu === "portfolio" ? <img src={theme_pattern} alt='' /> : <></>} </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>  {menu === "contact" ? <img src={theme_pattern} alt='' /> : <></>} </li>

      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar