import React, {Component} from "react";
import { Link } from 'react-router-dom';

class MessagesTableItem extends Component{
    render() {

        const {created_at, email, message} = this.props.message;

        return (
            <tr>
                <td>{created_at}</td>
                <td>{email}</td>
                <td>{message}</td>
                <td>
                    <Link to="/messages" className="btn btn-sm btn-danger m-1" onClick={this.props.deleteMessage}>Delete</Link>
                </td>
            </tr>
        );
    }
}
export default MessagesTableItem;
