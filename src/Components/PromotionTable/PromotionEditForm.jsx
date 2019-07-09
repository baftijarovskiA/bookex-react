import React, {Component} from "react";
import axios from "axios";
// import uuid from "uuid";
import { Link } from 'react-router-dom';
class PromotionEditForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            link: '',
            picture: '',
            display: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.getPromotion();
    }

    getPromotion(){
        let promotionId = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/promotion/${promotionId}`)
            .then( response => {
                this.setState({
                    id: response.data.id,
                    link: response.data.link,
                    picture: response.data.picture,
                    display: response.data.display
                });
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }

    handleVisibility(visibility){
        let id = this.state.id;
        axios.get(`http://localhost:8080/api/promotion/v/${visibility}/${id}`);
        window.location.reload();
    }

    editPromotion(newPromotion){
        axios.request({
            method: 'put',
            url: `http://localhost:8080/api/promotion/${this.state.id}`,
            data: newPromotion
        }).then( response =>{
            this.props.history.push("/promotions");
        }).catch(err => console.log(err));
    }

    handleSubmit(e){
        const newPromotion = {
            id: this.state.id,
            link: this.refs.link.value,
            picture: this.refs.picture.value,
            display: this.state.display
        };
        this.editPromotion(newPromotion);
        e.preventDefault();
    }

    handleChange(e){
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
                <h3>Edit promotion</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="link" ref="link" placeholder="Link" className="form-control mb-2" value={this.state.link} onChange={this.handleChange}/>
                    <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" value={this.state.picture} onChange={this.handleChange} />
                    {
                        this.state.display === true ?
                            <input type="button" className="btn btn-sm btn-outline-danger mb-2" value="Disable" onClick={this.handleVisibility.bind(this,0)}/>:
                            <input type="button" className="btn btn-sm btn-outline-success mb-2" value="Enable" onClick={this.handleVisibility.bind(this,1)}/>
                    }
                    <br/>
                    <input type="submit" value="Update" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><Link to="/promotions">Back to list</Link></p>
            </div>
        );
    }
}
export default PromotionEditForm;
