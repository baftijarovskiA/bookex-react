import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './CategoryItem.css'

class CategoryItem extends Component{
    render() {
        const {id, name, picture } = this.props.category;
        const image = {
            backgroundImage: 'url('+picture+')'
        };
        return (
            <div className="col-md-4 mb-4">
                <Link to={"/books/category/"+id} style={link} >
                    <div className="box box-image" style={image}>
                        <p className="box-text">{name}</p>
                    </div>
                </Link>
            </div>
        );
    }
}
const link = {
    textDecoration: 'none'
};

export default CategoryItem;
