import React, {Component} from "react";
import PromotionTableItem from "./PromotionTableItem";
import axios from "axios";
import { Link } from 'react-router-dom';

class PromotionTable extends Component{

    constructor(){
        super();
        this.state = {
            promotions:[]
        }
    }

    componentWillMount() {
        this.getPromotions();
    }

    getPromotions(){
        axios.get("http://localhost:8080/api/promotion")
            .then( response => {
                this.setState({
                    promotions: response.data
                });
                console.log(this.state);
            })
    }

    deletePromotion(id){
        axios.delete(`http://localhost:8080/api/promotion/${id}`)
            .then(res => {
                this.setState({
                    promotions: [...this.state.promotions.filter(p => p.id !== id)]
                });
        }).catch( err => console.log(err));
    }


    render() {
        return (
            <div className="container">
                <h3>Promotions.</h3>
                <Link to="/promotions/create" className="btn btn-outline-primary mb-2">Create new</Link>
               <table className="table table-bordered table-striped">
                   <thead>
                       <tr>
                            <th>ID</th>
                            <th>Picture Url</th>
                            <th>Link</th>
                            <th>Display</th>
                            <th></th>
                       </tr>
                   </thead>
                   <tbody>
                   {
                       this.state.promotions.map( promotion =>
                           <PromotionTableItem key={promotion.id} promotion={promotion} deletePromotion={this.deletePromotion.bind(this,promotion.id)} />
                       )
                   }
                   </tbody>
               </table>
            </div>
        );
    }
}
export default PromotionTable;
