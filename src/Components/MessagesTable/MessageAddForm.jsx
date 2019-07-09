import React, {Component} from "react";
import axios from "axios";
class MessageAddForm extends Component{

    addMessage(newMessage){
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/api/message',
            data: newMessage
        }).then( response =>{
            window.alert("Message sent!");
            this.refs.email.value = '';
            this.refs.message.value = '';
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newMessage ={
            email: this.refs.email.value,
            message: this.refs.message.value
        };
        this.addMessage(newMessage);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" name="email" ref="email" placeholder="Email" className="form-control mb-2" />
                <textarea name="message" ref="message" placeholder="Message" className="form-control mb-2" rows={8}></textarea>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        );
    }
}
export default MessageAddForm;
