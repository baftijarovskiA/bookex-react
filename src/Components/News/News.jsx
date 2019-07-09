import React, {Component} from "react";
import NewsItem from "./NewsItem/NewsItem";
import axios from "axios";
class News extends Component{

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
            })
    }

    render() {
        return (
            <div className="container">
                {this.state.posts.map( post =>
                    <NewsItem key={post.id} post={post}/>
                    )}
            </div>
        );
    }
}
export default News;
