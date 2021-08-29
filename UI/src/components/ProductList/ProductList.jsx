import axios from 'axios';
import React, { Component } from 'react';
import "./ProductList.css";

class ProductList extends Component {
    state = {
        products: []
    }
    async componentDidMount() {
        const response = await axios.get('http://localhost:8123/fetchall');
        this.setState({ products: response.data });
    }
    render() {
        return (
            <>
                <div className="ui info message">
                    <h3>You can see what products are available in the inventory here.</h3>
                    <p>
                        Showing all products we have in the inventory.
                    </p>
                </div>
                {
                    this.state.products.length > 0 ?
                        this.state.products.map((product) => {
                            return (
                                <div className="ui two column grid" key={product.id}>
                                    <div className="column">
                                        <h3>{product.title}</h3>
                                        <b style={{ color: 'green' }}>Price: {product.price} INR</b>
                                        <p>
                                            {
                                                product.description
                                            }
                                        </p>
                                    </div>
                                    <div className="column" align="center">
                                        {
                                            product.image ? <img src={product.image} alt={product.title} className="ui responsive image product-image" /> :
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ecwtj_wBCs6DmFVzf_UTQEXY0wdQ4jhWSw&usqp=CAU" alt={product.title} className="ui responsive image product-image" />
                                        }

                                    </div>
                                </div >
                            )
                        }) :
                        <div align="center">
                            <img
                                alt="items not found"
                                src="https://cdn.dribbble.com/users/1121009/screenshots/11030107/media/25be2b86a12dbfd8da02db4cfcbfe50a.jpg?compress=1&resize=400x300" />
                            <div className="ui red message">
                                <p>It appears there are no products available at the moment.</p>
                            </div>
                        </div>
                }
            </>
        );
    }
}

export default ProductList;