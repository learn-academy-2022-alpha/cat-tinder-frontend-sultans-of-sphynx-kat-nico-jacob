import React, {Component} from "react";
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

export default class Header extends Component {
    render() {
        return(
            <>
                <div class= "header">
                    <Navbar
                        color="#1F2733"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck(){}} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                            <img src= "img/logo.png" style={{
                                    height:'75px',
                                    width:'75px'}}/>
                                    <h1 style={{
                                      color:"#BE5A9C",
                                      paddingTop:"5px",
                                      fontSize:"48px"}}>Kittindr</h1>
                                <NavItem>
                                    <NavLink href="/">
                                        <h2 class="nav-text">Home</h2>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/catindex">
                                        <h2 class="nav-text">Find a match</h2>
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle nav>
                                        <h2 class="nav-text">Options</h2>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink href="/catnew">Add a Cat</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink href="/catindex">Update Cat</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </>

        )
    }
}
