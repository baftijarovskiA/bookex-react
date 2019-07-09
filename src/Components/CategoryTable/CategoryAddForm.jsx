import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
class CategoryAddForm extends Component{

    addCategory(newCategory){
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/category',
            data: newCategory
        }).then( response =>{
            this.props.history.push("/categories/all");
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newCategory ={
          name: this.refs.name.value,
          picture: this.refs.picture.value
        };
        this.addCategory(newCategory);
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-group col-md-6 m-auto">
                <h3>Create a category.</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="name" ref="name" placeholder="Name" className="form-control mb-2" />
                    <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" />
                    <input type="submit" value="Create" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><Link to="/categories/all">Back to list</Link></p>
            </div>
        );
    }
}
export default CategoryAddForm;
