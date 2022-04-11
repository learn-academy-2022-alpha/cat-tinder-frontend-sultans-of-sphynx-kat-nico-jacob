import React, {Component} from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap'


export default class CatShow extends Component {
    render() {
        let { cat } = this.props
        return(
            <div style= {{
                backgroundImage: `url("/img/Index-3.png")`,
                height: '100vh',
                position: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1920px 1080px',
                backgroundAttachment: 'sticky',
            }}>
            <a href="/CatIndex" class="dashboard">Dashboard</a>
                <div class="cat-show">
                  <Card>
                    <CardText class="name-card"></CardText>
                        <img src={cat.image} alt="adorable cat" class="show-card"/>
                  </Card>
                </div>
                <div class="text-box"><p style={{
                  fontSize:"40px",
                  color:"3A435E",
                  fontFamily: 'cursive',
                  marginBottom: "95px",
                  border: "2px solid black",
                  borderRadius: "5px 50px 0 0",
                  width: "500px",
                  marginBottom: "25px",
                }}>{cat.name}, {cat.age}</p>
                  {cat.enjoys}
                </div>
                <div class='placeholder1'>Placeholder Image</div>
                <div class='placeholder2'>Placeholder Image</div>
                <div class='placeholder3'>Placeholder Image</div>
            </div>
        )
    }
}
