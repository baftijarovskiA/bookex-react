import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Login extends Component{
    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-7 text-center m-auto">
                        <h3>Login to your existing account</h3>
                        <form className="form-group mt-5">
                            <input type="text" placeholder="Username" className="form-control m-2" />
                            <input type="password" placeholder="Password" className="form-control m-2" />
                            <input type="submit" value="Login" className="btn btn-primary btn-lg w-100 m-2" />
                        </form>
                        <h3>or <Link to="/profile/register" >register for free now.</Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
