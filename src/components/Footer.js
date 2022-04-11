import React, {Component} from "react";
import './footer.css'

export default class Footer extends Component {
    render() {
        return(
            <>
                <section className="footer">
                    <hr className="footer-seperator" />
                    <section className="footer-social-media">
                        {/*<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>*/}
                    </section>
                    <section className="footer-info">
                        <section className="footer-info-left">
                            <section className="footer-info__name">
                            <h3>Thank You For Visiting! We're a work in progress so thanks for the paitence!</h3>
                            </section>
                        </section>
                        <section className="footer-info-center">
                            <section className="footer-info__terms">
                            <br />
                            <br />
                                Copyright Sultans Of Sphynx LLC
                            </section>
                        </section>
                        <section className="footer-info-right">
                            <section className="footer-info__number">
                                <img src="img/vector.png"></img>Follow Us On Instagram!
                            </section>
                            <section className="footer-info__contact">
                                <img src="img/vector-2.png"></img>Friend Us!
                            </section>
                        </section>
                    </section>
                    <hr className="footer-seperator" />
                </section>

            </>

        )
    }
}
