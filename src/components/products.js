import Product from "./product";
import React, { Component } from "react";
import { Button, GridList } from "@material-ui/core";

class Products extends Component {
    
    state = {
        data: this.props.data,
    };

    goBack = e => {
        e.preventDefault();
        // Navegación
        this.props.history.push("/") //Agregar elementos a la historia
    };

    updateProduct = (index, updatedName) => {
         this.props.onUpdateProduct(index, updatedName);
    };

    render(){
        return(
            <div>
                <h1>Productos</h1>
                <GridList>
                    {this.state.data.products.map((product, index) => (
                        <Product
                            key={index}
                            index={index}
                            name={product.name}
                            specifications={product.specifications}
                            onUpdateProduct={this.updateProduct}
                        />
                    ))}
                    
                </GridList>
                
                <Button 
                    variant="contained"
                    color="secondary" 
                    onClick={this.goBack}
                    >
                    regresar
                </Button>
            </div>
        )
    }
}

export default Products;