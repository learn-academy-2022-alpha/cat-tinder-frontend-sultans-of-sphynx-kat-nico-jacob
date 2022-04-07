import React, {Component} from "react";
import {Card, CardText, CardTitle} from 'reactstrap'


export default class CatShow extends Component {
    render() {
        let { cat } = this.props
        return(
            <>
                <h1>Your kitty :)</h1>
                <Card body>
                    <CardTitle>Hi, my name is {cat.name}!</CardTitle>
                    <img src={cat.image} alt="adorable cat"/>
                    <CardText>I am {cat.age} years old. I enjoy {cat.enjoys}.</CardText>
                </Card>

            </>
        )
    }
}