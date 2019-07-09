import React, {Component} from "react";
import { Link } from 'react-router-dom';

class PromotionTableItem extends Component{
    render() {

        const {id, picture, link, display} = this.props.promotion;

        return (
            <tr>
                <td>{id}</td>
                <td><a href={picture}><img src={picture} width="400px" alt="Promotion cover"/></a></td>
                <td>{link}</td>
                <td>{display === true ? <p>Yes</p> : <p>No</p>}</td>
                <td>
                    <Link to="/promotions" className="btn btn-sm btn-danger m-1" onClick={this.props.deletePromotion}>Delete</Link>
                    <Link to={"/promotions/edit/"+id} className="btn btn-sm btn-success m-1">Edit</Link>
                </td>
            </tr>
        );
    }
}
export default PromotionTableItem;
