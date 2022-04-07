import React, {Component} from "react";
import { Button, Form, FormGroup, Input, Label} from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class CatNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            newCat: {
                name: "",
                age: "",
                enjoys: "",
                image: ""
            },
            submitted: false
        }
    }

    handleSubmit = () => {
        this.props.createCat(this.state.newCat)
        this.setState({submitted: true})
    }

    handleChange = (e) => {
        let { newCat } = this.state
        newCat[e.target.name] = e.target.value
        this.setState({newCat: newCat})
    }

    render() {
        return(
            <>
                <h1>Add a new Fur Friend!</h1>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" value={this.state.newCat.name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input type="text" name="age" value={this.state.newCat.age} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Enjoys</Label>
                        <Input type="text" name="enjoys" value={this.state.newCat.enjoys} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Add a sweet pic!</Label>
                        <Input type="text" name="image" value={this.state.newCat.image} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button name="submit" onClick={this.handleSubmit}>
                        Create a New Profile
                    </Button>
                    {this.state.submitted && <Redirect to="/catindex" />}
                </Form>

            </>
        )
    }
}
