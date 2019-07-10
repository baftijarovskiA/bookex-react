import React, {Component} from "react";
import axios from "axios";

class Register extends Component{

    addUser(user){
        // console.log(user);
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/user',
            data: user
        }).then( response =>{
            console.log(response);
            this.props.history.push("/profile/login");
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const user = {
            name: this.refs.fname.value,
            surname: this.refs.lname.value,
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            roles: {
                id: 2,
                name: "USER"
            }
        };

        if(this.refs.password.value !== this.refs.cpassword.value){
            window.alert("Passwords didn't match!");
        } else {
            this.addUser(user);
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-7 text-center m-auto">
                        <h3>Register now and get the eBooks you wanted for free.</h3>
                        <form className="mt-5" onSubmit={this.onSubmit.bind(this)}>
                            <input type="text" placeholder="First name" ref="fname" className="form-control m-2" required="required" />
                            <input type="text" placeholder="Last name" ref="lname" className="form-control m-2" required="required"  />
                            <input type="email" placeholder="E-mail" ref="email" className="form-control m-2" required="required"  />
                            <input type="text" placeholder="Username" ref="username" className="form-control m-2" required="required"  />
                            <input type="password" placeholder="New password" ref="password" className="form-control m-2" required="required"  />
                            <input type="password" placeholder="Confirm password" ref="cpassword" className="form-control m-2" required="required"  />
                            <input type="submit" value="Register" className="btn btn-primary btn-lg w-100 m-2" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
