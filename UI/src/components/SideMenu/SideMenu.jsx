import React, { Component } from 'react';
import "./SideMenu.css";
import { NavLink } from 'react-router-dom';

class SideMenu extends Component {
    render() {
        return (
            <>
                <NavLink to={"/"}>
                    <button className="ui fluid green button side-menu-button">
                        <i className="home icon"></i>Show all products
                    </button>
                </NavLink>
                <br />
                <NavLink to={'/add'}>
                    <button className="ui fluid green button side-menu-button">
                        <i className="plus icon"></i>Add new product
                    </button>
                </NavLink>
                <br />
                <NavLink to={'/update'}>
                    <button className="ui fluid green button side-menu-button">
                        <i className="edit icon"></i>Update a product
                    </button>
                </NavLink>
                <br />
                <NavLink to={'/delete'}>
                    <button className="ui fluid red button side-menu-button">
                        <i className="trash icon"></i>Delete a product
                    </button>
                </NavLink>
                <br />
                <NavLink to={'/about'}>
                    <button className="ui fluid blue button side-menu-button">
                        <i className="info icon"></i>About me
                    </button>
                </NavLink>
            </>
        );
    }
}

export default SideMenu;