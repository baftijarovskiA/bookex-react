import React, {Component} from "react";
import axios from 'axios';
import MessagesTableItem from "./MessagesTableItem";


class MessagesTable extends Component{

    constructor(){
        super();
        this.state = {
            messages:[]
        }
    }

    componentWillMount() {
        this.getMessages();
    }

    getMessages(){
        axios.get("http://localhost:8080/api/message")
            .then( response => {
                this.setState({
                    messages: response.data
                });
                // console.log(this.state);
            });
    }

    deleteMessage(id){
        axios.delete(`http://localhost:8080/api/message/${id}`)
            .then(res => {
                this.setState({
                    messages: [...this.state.messages.filter(c => c.id !== id)]
                });
            }).catch( err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h3>Messages.</h3>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Email</th>
                        <th className="w-50">Message</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.messages.map( message =>
                            <MessagesTableItem key={message.id} message={message} deleteMessage={this.deleteMessage.bind(this,message.id)}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default MessagesTable;
