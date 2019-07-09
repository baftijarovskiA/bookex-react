import React, {Component} from "react";
import NewsTableItem from "./NewsTableItem";
import { Link } from 'react-router-dom';
import axios from "axios";

class NewsTable extends Component{
    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    componentWillMount() {
        this.getPosts();
    }

    getPosts(){
        axios.get("http://localhost:8080/api/post")
            .then( response => {
                this.setState({
                    posts: response.data
                });
                console.log(this.state);
            })
    }

    deletePost(id){
        axios.delete(`http://localhost:8080/api/post/${id}`)
            .then(res => {
                this.setState({
                    posts: [...this.state.posts.filter(p => p.id !== id)]
                });
            }).catch( err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h3>Posts.</h3>
                <Link to="/news/create" className="btn btn-outline-primary mb-2">Create new</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Picture</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.posts.map( post =>
                            <NewsTableItem key={post.id} post={post} deletePost={this.deletePost.bind(this,post.id)}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default NewsTable;
