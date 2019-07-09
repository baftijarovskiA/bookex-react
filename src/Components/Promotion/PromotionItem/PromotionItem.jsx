import React, {Component} from "react";
import {Link} from 'react-router-dom';

class PromotionItem extends Component{
    render() {
        const { link, picture } = this.props.promotion;
        return (
                <Link to={link} style={linkS} >
                <img className="d-block w-100 mb-1" src={picture} alt="Promotion" />
                </Link>
        );
    }
}
const linkS = {
    textDecoration: 'none'
};

export default PromotionItem;
