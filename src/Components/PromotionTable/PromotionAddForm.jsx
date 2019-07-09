import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import uuid from 'uuid';
class PromotionAddForm extends Component{

    addPromotion(newPromotion){
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/promotion',
            data: newPromotion
        }).then( response =>{
            this.props.history.push("/promotions");
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newPromotion = {
            id: uuid.v1(),
            link: this.refs.link.value,
            picture: this.refs.picture.value
        };
        this.addPromotion(newPromotion);
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-6 m-auto">
                <h3>Create a promotion.</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="link" className="d-none">Link</label>
                        <input type="text" name="link" ref="link" placeholder="Link" className="form-control mb-2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link" className="d-none">Picture</label>
                        <input type="text" name="picture" ref="picture" placeholder="Picture url" className="form-control mb-2" />
                    </div>
                    <input type="submit" value="Create" className="btn btn-outline-primary mb-2"/>
                </form>
                <p><Link to="/promotions">Back to list</Link></p>
            </div>
        );
    }
}
export default PromotionAddForm;
