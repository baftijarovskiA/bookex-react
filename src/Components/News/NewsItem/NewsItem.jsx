import React, {Component} from "react";

class NewsItem extends Component{
    render() {
        const {title, description, updated_at, picture} = this.props.post;

        return (
            <div className="row alert alert-secondary">
                <div className="col-md-8">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>Posted on {updated_at}</p>
                </div>
                <div className="col-md-4">
                    <img src={picture} alt="Post cover" className="w-100"/>
                </div>
            </div>
        );
    }
}
export default NewsItem;
