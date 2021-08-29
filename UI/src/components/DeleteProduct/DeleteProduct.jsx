import axios from 'axios';
import React, { Component } from 'react';
class DeleteProduct extends Component {
    state = {
        products: []
    }
    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:8123/fetchall');
            this.setState({ products: response.data });
        } catch (err) {
            alert("Unable to fetch products");
        }
    }
    deleteProduct = async (product) => {
        try {
            const resp = await axios.delete(`http://localhost:8123/delete/${product.id}`);
            console.log(resp);
            this.setState({ products: resp.data });
        } catch (err) {
            alert("Unabel to delete");
            console.log(err);
        }
    }
    render() {
        return (
            <>
                <div className="ui red message">
                    <h3>Delete products</h3>
                    <p>
                        Please use this panel to delete the products from your inventory.<br />
                        Be aware that you cannot get back the products once deleted.
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
                                            <th>Price</th>
                                            <th>Action(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
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
                                                        <input type="number"
                                                            name="price"
                                                            onChange={(e) => this.handelChange(e, product)}
                                                            value={product.price} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="ui red inverted button"
                                                    onClick={() => this.deleteProduct(product)}><i className="trash icon" />Delete</button>
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

export default DeleteProduct;