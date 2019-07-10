import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
class BookPreview extends Component{

    constructor(props){
        super(props);
        this.state = {
            book:'',
            category:'',
            role: '',
            user: []
        };
    }

    componentWillMount() {
        this.getBook();
        this.getUserDetails();
    }

    getBook(){
        let bookId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/book/${bookId}`)
            .then( response => {
                this.setState({
                    book: response.data,
                    category: response.data.category
                });
            });
    }

    getUserDetails(){
        this.setState({
            user: JSON.parse(localStorage.getItem("userdata")) || '',
            role: JSON.parse(localStorage.getItem("userrole")) || ''
        });

    }

    render() {

        const { name, authors, published, picture, description, fileUrl } = this.state.book;

        return (
            <div className="container alert alert-light p-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <br/>
                        <p><Link to={"/books/category/"+this.state.category.id}>{this.state.category.name}</Link></p>
                        {
                            this.state.user !== "" ? <a href={"http://localhost:8080/"+fileUrl} className="btn btn-secondary" download>Download</a> : <Link to="/profile/login">Login to download the book.</Link>
                        }
                    </div>
                    <div className="col-md-4">
                        <img src={picture} className="w-100" alt="Pdf cover page"/><br/>
                        <p>By: {authors}, in {published}.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookPreview;
