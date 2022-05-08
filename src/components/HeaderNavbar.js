import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";

import { BsFillBadge3DFill } from "react-icons/bs";

const HeaderNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><BsFillBadge3DFill /> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link className="nav-link" to="/register">Signup</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link" to="/login">Login</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                    <Link className='dropdown-item' to="/login">home</Link>

                </DropdownItem>
                <DropdownItem>
                    <Link className='dropdown-item' to="/login">home</Link>

                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;