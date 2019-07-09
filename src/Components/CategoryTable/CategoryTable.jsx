import React, {Component} from "react";
import CategoryTableItem from "./CategoryTableItem";
import axios from 'axios';
import { Link } from 'react-router-dom';


class CategoryTable extends Component{

    constructor(){
        super();
        this.state = {
            categories:[]
        }
    }

    componentWillMount() {
        this.getCategories();
    }

    getCategories(){
        axios.get("http://localhost:8080/api/category")
            .then( response => {
                this.setState({
                   categories: response.data
                });
                // console.log(this.state);
            });
    }

    getBooks(id){
        axios.get(`http://localhost:8080/api/book/category/${id}`)
            .then( response => {
                return response.data.length;
            })
    }

    deleteCategory(id){
        if(this.getBooks(id) !== 0){
            window.alert("You cannot delete this category because there are books of this category!");
            return;
        } else {
            axios.delete(`http://localhost:8080/api/category/${id}`)
            .then(res => {
                    this.setState({
                        categories: [...this.state.categories.filter(c => c.id !== id)]
                    });
                }).catch( err => console.log(err));
        }
    }

    render() {
        return (
            <div className="container">
                <h3>Categories.</h3>
                <Link to="/categories/create" className="btn btn-outline-primary mb-2">Create new</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Popularity</th>
                        <th>Display</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.categories.map( category =>
                            <CategoryTableItem key={category.id} category={category} deleteCategory={this.deleteCategory.bind(this,category.id)}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CategoryTable;
