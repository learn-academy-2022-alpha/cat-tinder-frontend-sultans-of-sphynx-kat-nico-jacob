import React, {Component} from "react";
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap'

export default class CatIndex extends Component {
    render() {
        return(
            <>
                <h3>Meet the Cats!</h3>
                <br />
                <Col sm="6">
                    {this.props.cats.map(cat => {
                        return(
                            <div>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {cat.name}
                                        </CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                                            {cat.enjoys}
                                        </CardSubtitle>
                                    </CardBody>
                                    <img alt="Card image cap"
                                         src={cat.image} width="100%"/>
                                    <CardBody>
                                        <CardText>
                                            Some quick example text to build on the card title
                                            and make up the bulk of the card's content.
                                        </CardText>
                                        <CardLink href="#">
                                            Card Link
                                        </CardLink>
                                        <CardLink href="#">
                                            Another Link
                                        </CardLink>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </Col>
            </>
        )
    }
}