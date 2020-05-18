import React, { Component } from "react";
import Header from "./components/header";
import Products from "./components/products";
import NewProduct from "./components/newProduct";
import data from './assets/data/products.json'

import './styles/App.css';

class App extends Component {
  
  state = {
    product: 'bolsas',
    products: data,
  };

  showProducts = e => {
    e.preventDefault();
    this.props.history.push("/productos") //Agregar elementos a la historia
  }

  updateProduct = (index, updatedName) => {
    let newState = {...this.state};
    newState.products.products[index].name = updatedName;
    this.setState(newState);
  }

  addProduct = (productName) => {
    let newState = { ...this.state };

    const newProduct = {
      id: newState.products.products.length,
      name: productName,
      specifications: {"unit":"kilo","price": "45.50","category": "Bolsa","bio": "no"},
    }
    newState.products.products.push(newProduct);
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <NewProduct onAddProduct={this.addProduct}/>
        <Products 
          data={this.state.products} 
          onUpdateProduct={this.updateProduct}/>
      </div>
    );
  }
}

export default App;
