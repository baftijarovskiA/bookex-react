import React, {Component} from "react";

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            user: [],
            role: ''
        }
    }

    componentWillMount() {
        this.getUserDetails();
    }

    getUserDetails(){
        this.setState({
            user: JSON.parse(localStorage.getItem("userdata")) || '',
            role: JSON.parse(localStorage.getItem("userrole")) || ''
        });

    }

    render() {
        return (
            <footer>
                <hr/>
                <div className="container pb-5">
                    <div>BookEx | eBook Exchange - Copyright &copy; 2019
                        <a className="float-right ml-2 mr-2" href="https://github.com/baftijarovskiA/bookex-react" target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a className="float-right ml-2 mr-2" href="https://github.com/baftijarovskiA/bookex" target="_blank" rel="noopener noreferrer">API</a>
                        {this.state.role === "ADMIN" ? <a className="float-right ml-2 mr-2" href="/messages">MESSAGES</a> : ''}
                        {this.state.role === "ADMIN" ? <a className="float-right ml-2 mr-2" href="/news">NEWS</a> : ''}
                        {this.state.role === "ADMIN" ? <a className="float-right ml-2 mr-2" href="/promotions">PROMOTIONS</a> : ''}
                        {this.state.role === "ADMIN" ? <a className="float-right ml-2 mr-2" href="/categories/all">CATEGORIES</a> : ''}

                    </div>

                </div>
            </footer>
        );
    }
}
export default Footer;
