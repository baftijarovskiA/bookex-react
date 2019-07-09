import React, {Component} from "react";
import MessageAddForm from "../../MessagesTable/MessageAddForm";
import Checkout from "../../StripeCheckout/Checkout";

class Support extends Component{
    render() {
        return (
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <h3>Have some question or issue?
                        <br/>Tell us your problem.
                        </h3>
                    </div>
                    <div className="col-md-7">
                        <MessageAddForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <h1>Donate now</h1>
                        <p>We are proudly non-profit, non-corporate and non-compromised.<br/>

                        </p>
                    </div>
                    <div className="col-md-7">
                        <Checkout />
                    </div>
                </div>
            </div>
        );
    }
}
export default Support;
