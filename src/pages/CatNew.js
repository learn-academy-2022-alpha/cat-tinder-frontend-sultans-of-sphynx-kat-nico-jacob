import React, {Component} from "react";

import { useForm } from "react-hook-form"


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

              <div style= {{
                  backgroundImage: `url("/img/Create.png")`,
                  height: '100vh',
                  position: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1920px 1080px',
                  backgroundAttachment: 'sticky',
              }}>

              <form class="create-form">
                  <p class="form-group">
                      <label>Username</label>
                      <input class="form-control" type="text" placeholder="Enter your Username"></input>
                  </p>
                  <p class="form-group">
                      <label>Password</label>
                      <input class="form-control" type="password" placeholder="Enter your password"></input>
                  </p>
                  <p class="form-group">
                      <label>Age</label>
                      <input class="form-control" type="number" placeholder="Enter your age"></input>
                  </p>
                  <p class="form-group">
                      <label>Location</label>
                      <input class="form-control" type="text" placeholder="Enter your location"></input>
                  </p>
                  <p class="form-group">
                      <label>Show Off! Give Us Your Best Side!</label>
                      <input class="form-control" type="text" placeholder="Enter your location"></input>
                  </p>
                  <a href="/CatIndex" class="join2">Join Today</a>
              </form>
          </div>
        )
    }
}
