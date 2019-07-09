import React, {Component} from "react";
import { Link } from 'react-router-dom';

class CategoryTableItem extends Component{
    render() {

        const {id, name, picture, popularity, visible} = this.props.category;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{
                    picture === "" ? <p>No image</p> : <a href={picture}><img src={picture} width="200px" alt="Category cover"/></a>
                }</td>
                <td>{popularity}</td>
                <td>{visible === true ? <p>Yes</p> : <p>No</p>}</td>
                <td>
                    <Link to="/categories/all" className="btn btn-sm btn-danger m-1" onClick={this.props.deleteCategory}>Delete</Link>
                    <Link to={"/categories/edit/"+id} className="btn btn-sm btn-success m-1">Edit</Link>
                </td>
            </tr>
        );
    }
}
export default CategoryTableItem;
