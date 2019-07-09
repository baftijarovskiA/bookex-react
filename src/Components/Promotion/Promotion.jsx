import React, {Component} from "react";
import PromotionItem from "./PromotionItem/PromotionItem";
import axios from "axios";

class Promotion extends Component{

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
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col full-size">
                        {this.state.promotions.map(promotion =>
                        {
                            if (promotion.display === true)
                                return <PromotionItem key={promotion.id} promotion={promotion} />;
                            else
                                return '';
                        }
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotion;
