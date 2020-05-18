import React, { Component } from "react";
import "../styles/App.css";
import Button from '@material-ui/core/Button';
import Country from "./country.js";

class Countries extends Component {

    constructor(){
        super();
        this.state = {
            countries: [],
        }
    }

    componentDidMount(){
        this.getCountries();
    }
    getCountries(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(
            response =>
            response.json()
        ).then(data => {
            this.setState({ countries: data })
        })
        .catch(error => console.log(error));
    }

    delete = name => {
        let newState = { ...this.state };

        newState.countries = newState.countries.filter(
            country => country.name !== name
        );
        this.setState(newState);
    }

    render(){
        // const { params } = this.props.match;

        return(
            <div className="Countries">
                <ul>
                    {this.state.countries.map((country, index)=>(
                        <Country key={index} name={country.name} onDelete={this.delete}/>
                    ))}
                </ul>
                <h1>Países</h1>
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={this.getCountries}
                >
                    Cargar Lista
                </Button>
            </div>
        )
    }
}

export default Countries;