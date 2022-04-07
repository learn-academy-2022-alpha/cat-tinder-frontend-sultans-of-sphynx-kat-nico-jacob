import React, {Component} from "react";
import { useForm } from "react-hook-form"

export default class CatNew extends Component {
    render() {
        return(
              <div style= {{
                  backgroundImage: `url("/img/Create.png")`,
                  height: '100vh',
                  position: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1920px 1080px',
                  backgroundAttachment: 'scroll',
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
                  <a href="/CatIndex" class="join2">Join Today</a>
              </form>
          </div>
        )
    }
}
