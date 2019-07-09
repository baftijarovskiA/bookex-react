import React, {Component} from "react";
import { Link } from 'react-router-dom';
class NewsTableItem extends Component{
    render() {

        const {id, title, picture, updated_at} = this.props.post;

        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><a href={picture}><img src={picture} width="200px" alt="Post cover"/></a></td>
                <td>{updated_at}</td>
                <td>
                    <Link to="/news" className="btn btn-sm btn-danger m-1" onClick={this.props.deletePost}>Delete</Link>
                    <Link to={"/news/edit/"+id} className="btn btn-sm btn-success m-1">Edit</Link>
                </td>
            </tr>
        );
    }
}
export default NewsTableItem;
