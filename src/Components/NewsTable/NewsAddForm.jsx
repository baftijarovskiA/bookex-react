import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
class NewsAddForm extends Component{

    addPost(newPost){
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/post',
            data: newPost
        }).then( response =>{
            this.props.history.push("/news");
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newPost = {
            title: this.refs.title.value,
            picture: this.refs.picture.value,
            description: this.refs.description.value,
        };
        this.addPost(newPost);
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-6 m-auto">
                <h3>Create a post.</h3>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="form-gorup">
                        <label htmlFor="title" className="d-none">Title</label>
                        <input type="text" name="title" ref="title" placeholder="Title" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture" className="d-none">Picture</label>
                        <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="d-none">Description</label>
                        <textarea name="descripton" ref="description" className="form-control mb-2" rows="10" placeholder="Your post message here..."></textarea>
                    </div>
                    <input type="submit" value="Create" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><Link to="/news">Back to list</Link></p>
            </div>
        );
    }
}
export default NewsAddForm;
