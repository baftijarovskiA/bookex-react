import React, {Component} from "react";
import axios from "axios";
class BooksAddForm extends Component{

    constructor(){
        super();
        this.state = {
            categories:[],
            selectedFile: null
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
            })
    }

    addBook(newBook){
        let categoryId = newBook.category.id;
        axios.get(`http://localhost:8080/api/category/increase/${categoryId}`);

        console.log(newBook);

        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/book',
            data: newBook
        }).then( response =>{
            this.props.history.push("/books/my");
        }).catch(err => console.log(err));
    }

    getFileUrl(){
        var final='';
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        axios.post("http://localhost:8080/uploadFile",formData)
            .then( res => {
                let link = res.data.fileDownloadUri;
                let result = link.split('/');
                final = result[3]+"/"+result[4];
                this.storeValues(final);
            });
    }

    getCategoryById(id){
        let category = this.state.categories.filter(
            c => c.id === id );
        return category[0];
    }

    storeValues(file){
        const newBook = {
            name: this.refs.name.value,
            authors: this.refs.authors.value,
            picture: this.refs.picture.value,
            published: this.refs.published.value,
            description: this.refs.description.value,
            category: this.getCategoryById(parseInt(this.refs.category.value)),
            fileUrl: file,
        };
        this.addBook(newBook);
    }

    onSubmit(e){
        this.getFileUrl();
        this.getCategories();
        e.preventDefault();
    }


    fileSelectedHandler = (event) => {
        this.setState({
           selectedFile: event.target.files[0]
        });
        console.log(event.target.files[0])
    };

    render() {
        return (
            <div className="form-group col-md-6 m-auto">
                <h3>Create a eBook.</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Name</label>
                        <input type="text" name="name" ref="name" placeholder="Name" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Authors</label>
                        <input type="text" name="authors" ref="authors" placeholder="Authors" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Picture</label>
                        <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Published</label>
                        <input type="number" name="published" ref="published" placeholder="Published" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Description</label>
                        <textarea name="desciption" ref="description" className="form-control mb-2" placeholder="Description" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">Category</label>
                        <select name="category" ref="category" className="form-control mb-2">
                            {this.state.categories.map( category =>
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="d-none">PDF file</label>
                        <p>Select pdf file: <input type="file" name="file" ref="file" onChange={this.fileSelectedHandler} className="form-control mb-2"/></p>
                    </div>
                    <input type="submit" value="Create" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><a href="/books/my">Back to list</a></p>
            </div>
        );
    }
}
export default BooksAddForm;
