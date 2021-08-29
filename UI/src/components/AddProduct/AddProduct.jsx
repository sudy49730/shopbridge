import axios from 'axios';
import React, { Component } from 'react';
class AddProduct extends Component {
    state = {
        newProduct: {}
    }
    validate = () => {
        const product = this.state.newProduct;
        if (Object.keys(product).length !== 4)
            return false;
        else if (Object.values(product).length !== 4)
            return false;
        else
            return true;
    }
    handelSubmit = async (e) => {
        e.preventDefault();
        if (this.validate()) {
            try {
                await axios.post('http://localhost:8123/addnew', this.state.newProduct);
                this.setState({ newProduct: {} });
                console.log(this.state);
                alert("Item added successfully!");
            } catch (e) {
                alert("Error occured");
            }
        } else {
            alert("Invalid entries");
        }
    }
    handleChange = (e) => {
        let data = this.state.newProduct;
        data[e.target.name] = e.target.value;
        this.setState({ newProduct: data });
    }
    handelReset = () => {
        this.setState({ newProduct: {} });
    }
    render() {
        return (
            <>
                <div className="ui info message">
                    <h3>Add a new product to inventory.</h3>
                    <p>
                        You can use this page to add new products to the inventory.
                    </p>
                </div>
                <div className="ui form">
                    <form onSubmit={(e) => this.handelSubmit(e)}>
                        <div className="fields">
                            <div className="field">
                                <label>Title</label>
                                <input type="text" value={this.state.newProduct['title'] || ""} name="title" onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className="field">
                                <label>Price</label>
                                <input type="number" value={this.state.newProduct['price'] || ""} name="price" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>
                        <div className="field">
                            <label>Product's description</label>
                            <textarea rows="2" value={this.state.newProduct['description'] || ""} name="description" onChange={(e) => this.handleChange(e)}></textarea>
                        </div>
                        <div className="field">
                            <label>Image URl</label>
                            <input type="text" value={this.state.newProduct['image'] || ""} name="image" onChange={(e) => this.handleChange(e)} />
                        </div>
                        <button className="ui inverted green button" type="submit">Add to inventory</button>
                        <button className="ui inverted red button" type="reset" onClick={this.handelReset}>Reset</button>
                    </form>
                </div>
            </>
        );
    }
}

export default AddProduct;