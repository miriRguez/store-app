import React, { Component } from "react";
import { Fab,TextField } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewProduct extends Component {

    // constructor() {
    //     super();
    //     this.addProduct() = this.addProduct(this);
    // }
    newProduct =  React.createRef();

    addProduct = (event) => {
        event.preventDefault();
        this.props.onAddProduct(this.newProduct.value);
        this.newProduct.value = "";
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.addProduct}>
                {/* <input   ref={this.newProduct} /> */}
                <TextField
                    label="Producto..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={e => (this.newProduct = e)}
                />
                <Fab 
                    color="primary" 
                    size="medium"
                    className="dish-form-icon" 
                    onClick={this.addProduct}
                >
                    <AddIcon />
                </Fab>
            </form>
        );
    }
}

export default NewProduct;