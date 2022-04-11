import React, {Component} from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap'


export default class CatShow extends Component {
    render() {
        let { cat } = this.props
        return(
            <div style= {{
                backgroundImage: `url("/img/Index-2.png")`,
                height: '100vh',
                position: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1920px 1080px',
                backgroundAttachment: 'scroll',
            }}>>
            <a href="/CatIndex" class="dashboard">Dashboard</a>
                <div class="cat-show">
                  <Card>
                    <CardText style={{
                      fontSize:"40px",
                      background:"#efefef",
                      fontFamily: 'cursive'
                    }}> {cat.name}, {cat.age}</CardText>
                        <img src={cat.image} alt="adorable cat"/>
                  </Card>
                </div>
                <div class="text-box">
                  {cat.enjoys}
                </div>
                <div class='placeholder1'>Placeholder</div>
                <div class='placeholder2'>Placeholder</div>
                <div class='placeholder3'>Placeholder</div>
            </div>
        )
    }
}
