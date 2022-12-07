import React, { useState, useEffect } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { IconContext } from "react-icons/lib"
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handelClick=()=> setClick(!click)
  const closeMobileMenu = () => setClick(false)


  const changeNav = () => {
    if (window.scrollY >= 80) {
    
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
 
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav())
  }, [])

  return (
    <div>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Explor
            </NavLogo>
            <MobileIcon onClick={handelClick} >
              {click ? <FaTimesCircle /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handelClick} click={click}>
            <NavItem>
            <NavLinks to="/" >Home</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/images" >Images</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/destination" >Destination</NavLinks>
            </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
