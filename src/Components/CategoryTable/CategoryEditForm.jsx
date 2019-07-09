import React, {Component} from "react";
import axios from "axios";
class CategoryEditForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            picture: '',
            popularity: '',
            visible: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.getCategory();
    }

    getCategory(){
        let categoryId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/category/${categoryId}`)
            .then( response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    picture: response.data.picture,
                    popularity: response.data.popularity,
                    visible: response.data.visible,
                });
            })
            .catch(err => console.log(err));
    }

    handleVisibility(visibility){
        let id = this.state.id;
        axios.get(`http://localhost:8080/api/category/v/${visibility}/${id}`);
        window.location.reload();
    }

    editCategory(newCategory){
        axios.request({
            method: 'put',
            url: `http://localhost:8080/api/category/${this.state.id}`,
            data: newCategory
        }).then( response =>{
            this.props.history.push("/categories/all");
        }).catch(err => console.log(err));
    }

    handleSubmit(e){
        const newCategory =  {
            name: this.refs.name.value,
            picture: this.refs.picture.value
        };
        this.editCategory(newCategory);
        e.preventDefault();
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="form-group col-md-6 m-auto">
                <h3>Edit {this.state.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" ref="name" placeholder="Name" className="form-control mb-2" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" value={this.state.picture} onChange={this.handleChange} />
                    <input type="number" name="popularity" placeholder="Popularity" className="form-control mb-2" value={this.state.popularity} disabled="disabled" />
                    {
                        this.state.visible === true ?
                            <input type="button" className="btn btn-sm btn-outline-danger mb-2" value="Disable" onClick={this.handleVisibility.bind(this,0)}/>:
                            <input type="button" className="btn btn-sm btn-outline-success mb-2" value="Enable" onClick={this.handleVisibility.bind(this,1)}/>
                    }
                    <br/>
                    <input type="submit" value="Update" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><a href="/categories/all">Back to list</a></p>
            </div>
        );
    }
}
export default CategoryEditForm;
