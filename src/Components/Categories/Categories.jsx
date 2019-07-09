import React, {Component} from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import axios from "axios";


class Categories extends Component{

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
                console.log(this.state);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.categories.slice(0,this.props.value).map(
                        (category) => category.visible === true ? <CategoryItem key={category.id} category={category}/> : ''
                    )}
                </div>
            </div>
        );
    }
}

export default Categories;
