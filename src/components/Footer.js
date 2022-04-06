import React, {Component} from "react";
import './footer.css'

export default class Footer extends Component {
    render() {
        return(
            <>
                <section className="footer">
                    <hr className="footer-seperator" />
                    <section className="footer-social-media">
                        <h1>Footer </h1>
                        {/*<a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>*/}
                    </section>
                    <section className="footer-info">
                        <section className="footer-info-left">
                            <section className="footer-info__name">
                            <h2>Thank You For Visiting!</h2>
                            </section>
                            <section className="footer-info__returns">
                                Left column 2nd item
                            </section>
                        </section>
                        <section className="footer-info-center">
                            <section className="footer-info__email">
                                middle column
                            </section>
                            <section className="footer-info__terms">
                                middle column
                                <br />
                                Copyright
                            </section>
                        </section>
                        <section className="footer-info-right">
                            <section className="footer-info__number">
                                right column
                            </section>
                            <section className="footer-info__contact">
                                right column
                            </section>
                        </section>
                    </section>
                    <hr className="footer-seperator" />
                </section>

            </>

        )
    }
}