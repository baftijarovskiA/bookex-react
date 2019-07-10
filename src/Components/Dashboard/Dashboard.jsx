import React, {Component} from "react";
import BooksTable from "../BooksTable/BooksTable";

class Dashboard extends Component{

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

    logout(){
        this.setState({
            user: '',
            role: ''
        });
        localStorage.clear();
        console.log("Logged out!");
        window.location.reload();
        this.props.history.push("/");
        window.location.reload();
    }

    render() {
        // console.log(this.state.user);
        // console.log(this.state.role);

        const { id, name, surname, roles } = this.state.user;

        return (
            <div className="container">
                <h3>Welcome, {name} {surname}! <input type="button" value="Log out" className="btn btn-sm btn-outline-primary float-right" onClick={this.logout.bind(this)}/></h3>
                <hr/>
                {
                    roles.name !== "ADMIN" ? '' : <p>Access role: {this.state.role}</p>
                }
                {
                    roles.name !== "ADMIN" ? <BooksTable user={id} /> : <p>Hello administrator</p>
                }

            </div>
        );
    }
}
export default Dashboard;
