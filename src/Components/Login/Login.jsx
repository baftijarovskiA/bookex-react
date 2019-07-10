import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

class Login extends Component{

    checkCredentials(userDetails){
        axios.get( `http://localhost:8080/api/user/username/${userDetails.username}`)
            .then( response =>{
                    if(response.data !== ""){
                        if(userDetails.password === response.data.password){
                            localStorage.clear();
                            localStorage.setItem("userdata",JSON.stringify(response.data));
                            localStorage.setItem("userrole",JSON.stringify(response.data.roles.name));
                            this.props.history.push("/profile/dashboard");
                            // console.log("Data stored",response.data);
                            // console.log("Role stored", response.data.roles.name);
                        } else {
                            window.alert("Wrond password!");
                            this.refs.password.value = '';
                        }
                    } else {
                        window.alert("Bad credentials!");
                        this.refs.username.value = '';
                        this.refs.password.value = '';
                    }
                });
    }

    onSubmit(e){
        const userDetails ={
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        this.checkCredentials(userDetails);
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-7 text-center m-auto">
                        <h3>Login to your existing account</h3>
                        <form className="mt-5" onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-gorup">
                                <label htmlFor="username" className="d-none">Username</label>
                                <input type="text" placeholder="Username" ref="username" className="form-control m-2" required="required" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="d-none">Password</label>
                                <input type="password" placeholder="Password" ref="password" className="form-control m-2" required="required" />
                            </div>
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
