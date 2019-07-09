import React, {Component} from "react";
import axios from "axios";
class NewsEditForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            picture: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.getPost();
    }

    getPost(){
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/post/${postId}`)
            .then( response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    picture: response.data.picture
                }, () =>{
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

    editPost(newPost){
        axios.request({
            method: 'put',
            url: `http://localhost:8080/api/post/${this.state.id}`,
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
        this.editPost(newPost);
        e.preventDefault();
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
           [name]: value
        });
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-group col-md-6 m-auto">
                <h3>Edit {this.state.title}</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title" className="d-none">Title</label>
                        <input type="text" name="title" ref="title" placeholder="Title" className="form-control mb-2"
                               value={this.state.title} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="d-none">Picture</label>
                        <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2"
                               value={this.state.picture} onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title" className="d-none">Description</label>
                        <textarea name="description" ref="description" className="form-control mb-2" rows="10" placeholder="Your post message here..."
                                  value={this.state.description} onChange={this.handleInputChange} >.</textarea>
                    </div>

                    <input type="submit" value="Update" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><a href="/news">Back to list</a></p>
            </div>
        );
    }
}
export default NewsEditForm;
