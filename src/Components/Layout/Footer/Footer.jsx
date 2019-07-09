import React, {Component} from "react";

class Footer extends Component{
    render() {
        return (
            <footer>
                <hr/>
                <div className="container pb-5">
                    <div>BookEx | eBook Exchange - Copyright &copy; 2019
                        <a className="float-right ml-2 mr-2" href="https://github.com/baftijarovskiA/bookex-react" target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a className="float-right ml-2 mr-2" href="https://github.com/baftijarovskiA/bookex" target="_blank" rel="noopener noreferrer">API</a>
                        <a className="float-right ml-2 mr-2" href="/books/my">MY BOOKS</a>
                        <a className="float-right ml-2 mr-2" href="/messages">MESSAGES</a>
                        <a className="float-right ml-2 mr-2" href="/news">NEWS</a>
                        <a className="float-right ml-2 mr-2" href="/promotions">PROMOTIONS</a>
                        <a className="float-right ml-2 mr-2" href="/categories/all">CATEGORIES</a>

                    </div>

                </div>
            </footer>
        );
    }
}
export default Footer;
