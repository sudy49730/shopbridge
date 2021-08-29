import React, { Component } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import "./HomePage.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import AddProduct from '../../components/AddProduct/AddProduct';
import UpdateProduct from '../../components/UpdateProduct/UpdateProduct';
import DeleteProduct from '../../components/DeleteProduct/DeleteProduct';
import About from '../../components/About/About';

class HomePage extends Component {
    render() {
        return (
            <div className="ui container main-container">
                <div className="ui stackable grid centralized-grid">
                    <Router>
                        <div className="four wide column">
                            <SideMenu />
                        </div>
                        <div className="twelve wide column">
                            <Route exact path="/" component={ProductList} />
                            <Route exact path="/add" component={AddProduct} />
                            <Route exact path="/update" component={UpdateProduct} />
                            <Route exact path="/delete" component={DeleteProduct} />
                            <Route exact path="/about" component={About} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default HomePage;