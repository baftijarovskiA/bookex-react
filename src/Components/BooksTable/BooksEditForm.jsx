import React, {Component} from "react";
import axios from "axios";
class BooksEditForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories:[],
            id:'',
            name: '',
            authors: '',
            picture: '',
            published: '',
            description: '',
            category: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.getCategories();
        this.getBook();
    }

    getCategories(){
        axios.get("http://localhost:8080/api/category")
            .then( response => {
                this.setState({
                    categories: response.data
                });
            })
    }

    getBook(){
        let bookId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/book/${bookId}`)
            .then( response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    authors: response.data.authors,
                    picture: response.data.picture,
                    published: response.data.published,
                    description: response.data.description,
                    category: response.data.category,
                });
            });
    }

    editBook(newBook){
        console.log(newBook.category);
        axios.request({
            method: 'put',
            url: `http://localhost:8080/api/book/${this.state.id}`,
            data: newBook
        }).then( response =>{
            this.props.history.push("/books/my");
        }).catch(err => console.log(err));
    }

    getCategoryById(id){
        let category = this.state.categories.filter(
            c => c.id === id );
        return category[0];
    }

    handleSubmit(e){
        const newBook = {
            id:this.state.id,
            name: this.refs.name.value,
            authors: this.refs.authors.value,
            picture: this.refs.picture.value,
            published: this.refs.published.value,
            description: this.refs.description.value,
            category: this.getCategoryById(parseInt(this.state.category)),
        };
        this.editBook(newBook);
        e.preventDefault();
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
        console.log(this.state);
    }

    handleChangeSelect(e){
        const target = e.target;
        const value = target.value;
        console.log(value);

        // this.setState({
        //    category: this.getCategoryById(parseInt(value))
        // });
        // console.log(this.state);
    }


    render() {

        const {authors, name, picture, published, description, category} = this.state;

        return (
            <div className="form-group col-md-6 m-auto">
                <h3>Edit {name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" ref="name" placeholder="Name" className="form-control mb-2" value={name} onChange={this.handleChange}/>
                    <input type="text" name="authors" ref="authors" placeholder="Authors" className="form-control mb-2" value={authors} onChange={this.handleChange}/>
                    <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" value={picture} onChange={this.handleChange}/>
                    <input type="number" name="published" ref="published" placeholder="Published" className="form-control mb-2" value={published} onChange={this.handleChange}/>
                    <textarea name="description" ref="description" className="form-control mb-2" placeholder="Description" rows="10" value={description} onChange={this.handleChange}></textarea>
                    <select name="category" ref="category" className="form-control mb-2" value={category.id} onChange={this.handleChange} >
                        {this.state.categories.map( allcategory =>
                            <option key={allcategory.id} value={allcategory.id} >{allcategory.name}</option>
                        )}
                    </select>
                    {/*<p>Select pdf file: <input type="file" ref="file" className="form-control mb-2" value={file}/></p>*/}
                    <input type="submit" value="Update" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><a href="/books/my">Back to list</a></p>
            </div>
        );
    }
}
export default BooksEditForm;
