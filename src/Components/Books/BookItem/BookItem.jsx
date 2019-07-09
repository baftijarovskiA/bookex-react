import React, {Component} from "react";
import '../Books.css'
import { Link } from 'react-router-dom'
class BookItem extends Component{
    render() {

        const {id, picture, name, authors, published, description, category} = this.props.book;

        return (
            <div className="col-md-4 pt-3 pb-3">
                <div className="card">
                    <div className="poster">
                        <img src={picture} alt="Cover of the book" />
                    </div>
                    <br/>
                    <div className="details">
                        <h2>{name}<br/><span>{authors}</span></h2>
                        <div className="tags">
                            <span className="fantasy">{category.name}</span>
                        </div>
                        <div className="info">
                            <Link to={"/books/preview/"+id} className="btn btn-sm btn-outline-light mt-3">Preview</Link>
                            <p>Published: {published}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookItem;
