import React, {Component} from "react";
import Promotion from "../../Promotion/Promotion";
import Books from "../../Books/Books";
import News from "../../News/News";
import Categories from "../../Categories/Categories";

class Home extends Component{
    render() {
        return (
            <div className="home-page">
                <Promotion />
                <br/>
                <div className="container">
                    <h3>Latest eBooks</h3>
                    <hr/>
                    <Books value="3" />
                    <h3>Top categories</h3>
                    <hr/>
                    <Categories value="3" />
                    <h3>Feeds and news</h3>
                    <hr/>
                    <News />
                </div>
            </div>
        );
    }
}
export default Home;
