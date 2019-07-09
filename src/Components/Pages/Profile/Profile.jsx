import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Profile extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center ">
                        <ul className="list-group">
                            <li className="list-group-item m-2 p-3 text-center"><Link to="/profile/login">LOGIN</Link></li>
                            <li className="list-group-item m-2 p-3 text-center"><Link to="/profile/register">REGISTER</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;
