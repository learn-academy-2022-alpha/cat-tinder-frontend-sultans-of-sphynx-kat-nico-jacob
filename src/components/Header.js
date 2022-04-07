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
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            <h1>Kittinder</h1>
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck(){}} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/catindex">
                                        Find a match
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav>
                                        Options
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
                            <NavbarText>
                                Sultans of Sphynx
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            </>

        )
    }
}
