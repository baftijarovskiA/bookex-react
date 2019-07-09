import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import CNavbar from "../Layout/CNavbar/CNavbar";
import Categories from "../Categories/Categories";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Support from "../Pages/Support/Support";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Books from "../Books/Books";
import Footer from "../Layout/Footer/Footer";
import NewsAddForm from "../NewsTable/NewsAddForm";
import NewsEditForm from "../NewsTable/NewsEditForm";
import PromotionTable from "../PromotionTable/PromotionTable";
import CategoryTable from "../CategoryTable/CategoryTable";
import NewsTable from "../NewsTable/NewsTable";
import CategoryAddForm from "../CategoryTable/CategoryAddForm";
import CategoryEditForm from "../CategoryTable/CategoryEditForm";
import PromotionAddForm from "../PromotionTable/PromotionAddForm";
import PromotionEditForm from "../PromotionTable/PromotionEditForm";
import BookPreview from "../Books/BookPreview";
import BooksTable from "../BooksTable/BooksTable";
import BooksAddForm from "../BooksTable/BooksAddForm";
import BooksEditForm from "../BooksTable/BooksEditForm";
import BooksCategory from "../Books/BooksCategory";
import MessagesTable from "../MessagesTable/MessagesTable";

class App extends Component{
    render() {
        return (
            <Router>
                <CNavbar />
                <Route exact path="/" component={Home}/>

                <Route exact path="/categories" component={Categories}/>
                <Route path="/categories/all" component={CategoryTable}/>
                <Route path="/categories/create" component={CategoryAddForm}/>
                <Route path="/categories/edit/:id" component={CategoryEditForm}/>

                <Route exact path="/books" component={Books}/>
                <Route path="/books/my" component = {BooksTable} />
                <Route path="/books/create" component = {BooksAddForm} />
                <Route path="/books/preview/:id" component={BookPreview}/>
                <Route path="/books/edit/:id" component = {BooksEditForm} />
                <Route path="/books/category/:id" component={BooksCategory}/>

                <Route path="/support" component={Support}/>
                <Route path="/messages" component={MessagesTable} />

                <Route exact path="/profile" component={Profile}/>
                <Route path="/profile/register" component={Register}/>
                <Route path="/profile/login" component={Login}/>
                {/*<Route path="/profile/edit" render={ props => (  )} />*/}

                <Route exact path="/promotions" component={PromotionTable}/>
                <Route path="/promotions/create" component={PromotionAddForm}/>
                <Route path="/promotions/edit/:id" component={PromotionEditForm}/>

                <Route exact path="/news" component={NewsTable}/>
                <Route path="/news/create" component={NewsAddForm}/>
                <Route path="/news/edit/:id" component={NewsEditForm}/>
                <Footer />
            </Router>
        );
    }
}

export default App;
