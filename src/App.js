import React, {Component} from "react";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Error from './pages/NotFound'
import CatEdit from './pages/CatEdit'

import mockCats from "./mockCats";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: mockCats
        }
    }

    createCat = (cat) => {
        console.log(cat)
    }

    render() {

    return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
                    <Route path="/catshow/:id" render={(props) => {
                        let id = props.match.params.id
                        let cat = this.state.cats.find(cat => cat.id === +id)
                        return <CatShow cat={cat} />
                    }} />
                    <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />}
                    />
                    <Route path="/catedit" component={CatEdit} />
                    <Route component={Error}/>
                </Switch>
                <Footer />
            </Router>
    );
  }
}
