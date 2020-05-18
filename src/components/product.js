import React, { Component } from "react";
import "../styles/App.css";
import { Card, List, ListItemIcon, ListItem, 
    CardContent, ListSubheader, ListItemText, TextField,
    IconButton, } from "@material-ui/core";
import { ScatterPlot, Edit, } from "@material-ui/icons"
class Product extends Component {
    state = {
        edit: false,
        name: this.props.name,
        specifications: this.props.specifications,
    };

    edit = e => {
        this.setState({ edit: !this.state.edit });
    };

    handleChange = e => {
        let newState = { ...this.state };
        newState.name = e.currentTarget.value;

        this.setState(newState);
        this.props.onUpdateProduct(this.props.index, newState.name);
    };

    componentDidUpdate(){
      console.log('Componente actualizado');
    }

    render(){
        return(
            <Card className="card">
                <CardContent>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                {this.state.edit ? (
                                  <TextField
                                    label="Producto..."
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                  />  
                                ) : (
                                    this.props.name
                                    )}
                                    <IconButton size="small" onClick={this.edit}>
                                        <Edit/>
                                    </IconButton>
                            </ListSubheader>
                        }
                    >
                        {Object.keys(this.props.specifications).map((key) => (
                            <ListItem button key={key}>
                                <ListItemIcon>
                                    <ScatterPlot/>
                                </ListItemIcon>
                                <ListItemText 
                                    inset 
                                    primary={key}
                                    secondary={this.props.specifications[key]}
                                />
                            </ListItem>
                        ))}

                    </List>
                </CardContent>
            </Card>
        )
    }
}

export default Product;