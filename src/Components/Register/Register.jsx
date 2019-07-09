import React, {Component} from "react";

class Register extends Component{
    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-7 text-center m-auto">
                        <h3>Register now and get the eBooks you wanted for free.</h3>
                        <form className="form-group mt-5">
                            <input type="text" placeholder="First name" className="form-control m-2" />
                            <input type="text" placeholder="Last name" className="form-control m-2" />
                            <input type="email" placeholder="E-mail" className="form-control m-2" />
                            <input type="text" placeholder="Username" className="form-control m-2" />
                            <input type="password" placeholder="New password" className="form-control m-2" />
                            <input type="password" placeholder="Confirm password" className="form-control m-2" />
                            <input type="submit" value="Register" className="btn btn-primary btn-lg w-100 m-2" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
