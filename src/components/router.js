import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./products";
import Product from "./product";
import Providers from "./providers";
import App from "../App";
import NotFound from "./notFound";
import Countries from "./countries";

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/paises" component={Countries}/>
        <Route path="/productos" component={Products}/>
        <Route path="/producto/:name" component={Product}/>
        <Route path="/proveedores" component={Providers}/>
        <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
);

export default Router;