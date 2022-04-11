import React, {Component} from "react";

export default class Home extends Component {
    render() {
        return(
            <div style= {{
              backgroundImage: `url("/img/Home.png")`,
              height: '100vh',
              position: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1920px 1080px',
              backgroundAttachment: 'fixed'
            }}>
              <a href="/CatNew" class="join">Join Today</a>
            </div>
        )
    }
}
