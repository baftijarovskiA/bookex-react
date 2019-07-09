import React, {Component} from "react";
import BookItem from "./BookItem/BookItem";
import axios from "axios";

class BooksCategory extends Component{

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
        let categoryId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/book/category/${categoryId}`)
            .then( response => {
                this.setState({
                    books: response.data
                });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.books.slice(0,this.props.value).map(
                            (book) =>
                                <BookItem key={book.id} book={book}/>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default BooksCategory;
