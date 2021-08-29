import axios from 'axios';
import React, { Component } from 'react';
class UpdateProduct extends Component {
    state = {
        products: []
    }
    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:8123/fetchall');
            const products = response.data;
            this.setState({ products });
        } catch (err) {
            alert('Unable to fetch products');
        }
    }
    updateProduct = async (product) => {
        const updatedProduct = this.state.products.filter(e => e.id === product.id)[0];
        try {
            await axios.put(`http://localhost:8123/update/${product.id}`, updatedProduct);
            alert("Product updated");
        } catch (err) {
            alert("Unable to update this product");
        }
    }
    handelChange = async (e, product) => {
        e.preventDefault();
        const productToUpdate = this.state.products.filter(e => e.id === product.id)[0];
        productToUpdate[e.target['name']] = e.target['value'];
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === product.id) {
                this.state.products[i] = productToUpdate;
                break;
            }
        }
        this.setState({ products: this.state.products });
    }
    render() {
        return (
            <>
                <div className="ui info message">
                    <h3>Update products in inventory</h3>
                    <p>
                        Please use this panel to update products in the inventory.
                    </p>
                </div>
                {
                    this.state.products.length > 0 ?
                        this.state.products.map(product => {
                            return (
                                <table className="ui celled table" key={product.id}>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>ImageURL</th>
                                            <th>Action(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>{product.id}</td>
                                            <td>
                                                <div className="ui form">
                                                    <div className="field fluid">
                                                        <input type="text"
                                                            name="title"
                                                            onChange={(e) => this.handelChange(e, product)}
                                                            value={product.title} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ui form">
                                                    <div className="field fluid">
                                                        <input type="text"
                                                            name="description"
                                                            onChange={(e) => this.handelChange(e, product)}
                                                            value={product.description} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ui form">
                                                    <div className="field fluid">
                                                        <input type="number"
                                                            name="price"
                                                            onChange={(e) => this.handelChange(e, product)}
                                                            value={product.price} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ui form">
                                                    <div className="field fluid">
                                                        <input type="text"
                                                            name="image"
                                                            onChange={(e) => this.handelChange(e, product)}
                                                            value={product.image} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="ui green inverted button"
                                                    onClick={() => this.updateProduct(product)}>Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default UpdateProduct;