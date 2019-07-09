import React, {Component} from "react";
import BooksTableItem from "./BooksTableItem";
import { Link } from 'react-router-dom';
import axios from "axios";

class BooksTable extends Component{

    constructor(){
        super();
        this.state = {
            books:[]
        }
    }

    componentWillMount() {
        this.getBooks();
    }

    getBooks(){
        axios.get("http://localhost:8080/api/book")
            .then( response => {
                this.setState({
                    books: response.data
                });
            })
    }

    deleteBook(id){
        let book = this.state.books.filter(b => b.id === id);
        let categoryId = book[0].category.id;
        axios.get(`http://localhost:8080/api/category/decrease/${categoryId}`)
        axios.delete(`http://localhost:8080/api/book/${id}`)
            .then(res => {
                this.setState({
                    books: [...this.state.books.filter(b => b.id !== id)]
                });
            }).catch( err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h3>My eBooks.</h3>
                <Link to="/books/create" className="btn btn-outline-primary mb-2">Create new</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Authors</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map( book =>
                            <BooksTableItem key={book.id} book={book} deleteBook={this.deleteBook.bind(this, book.id)}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default BooksTable;
