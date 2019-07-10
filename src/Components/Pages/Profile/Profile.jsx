import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Dashboard from "../../Dashboard/Dashboard";

class Profile extends Component{

    constructor(){
        super();
        this.state = {
            user: [],
            role: ''
        }
    }

    componentWillMount() {
        this.getUserDetails();
        this.forceUpdate();
    }

    getUserDetails(){
        this.setState({
            user: JSON.parse(localStorage.getItem("userdata")) || '',
            role: JSON.parse(localStorage.getItem("userrole")) || ''
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.user !== '' ? <Dashboard /> : <ul className="list-group w-50 m-auto">
                                                                        <li className="list-group-item m-2 p-3 text-center"><Link to="/profile/login">LOGIN</Link></li>
                                                                        <li className="list-group-item m-2 p-3 text-center"><Link to="/profile/register">REGISTER</Link></li>
                                                                    </ul>
                        }

                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;
