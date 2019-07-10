import React, {Component} from "react";
import { Link } from 'react-router-dom';
class BooksTableItem extends Component{
    render() {

        const {id, category, name, picture, authors} = this.props.book;

        return (
            <tr>
                <td><Link to={"books/category/"+category.id}>{category.name}</Link></td>
                <td><Link to={"books/preview/"+id}>{name}</Link></td>
                <td><img src={picture} width="200px" alt="Book pdf cover"/></td>
                <td>{authors}</td>
                <td>
                    <Link to="/books/my" className="btn btn-sm btn-danger m-1" onClick={this.props.deleteBook}>Delete</Link>
                    <Link to={"/books/edit/"+id} className="btn btn-sm btn-success m-1">Edit</Link>
                </td>
            </tr>
        );
    }
}
export default BooksTableItem;
