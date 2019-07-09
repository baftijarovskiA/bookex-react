import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './CNavbar.css'

class CNavbar extends Component{

    render() {
        return (
            <nav className="container-fluid bg-light text-dark mb-3">
                <div className="container text-center p-1">
                    <div className="row p-3">
                        <div className="col-md-2">
                            <Link to="" ><img src="https://i.ibb.co/h9HfXnL/bookex.png" alt="Bookex logo" width="120px"/></Link>
                        </div>
                        <div className="col-md-10">
                            <ul className="mt-1 mb-1">
                                <li className="d-inline"><Link to="" style={link}>HOME</Link></li>
                                <li className="d-inline"><Link to="/categories" style={link}>CATEGORIES</Link></li>
                                <li className="d-inline"><Link to="/books" style={link}>E-BOOKS</Link></li>
                                <li className="d-inline"><Link to="/support" style={link}>SUPPORT</Link></li>
                                <li className="d-inline"><Link to="/profile" style={link}>PROFILE</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
const link = {
    textDecoration: 'none'
};
export default CNavbar;
