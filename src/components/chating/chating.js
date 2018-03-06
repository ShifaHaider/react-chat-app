import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';


class Chat extends Component {

    constructor(props) {
        super(props);
        this.nameId = props.match.params.id;
        this.state = {
            chatText: 'Hello World',
            chats: [],
            name: '',

        };
        this.db = firebase.firestore();
        this.ref = this.db.collection('Chat');
        this.loadChats();
    }

    addChat() {
        this.ref.add({
            text: this.state.chatText,
            id: this.nameId,
            time: Date.now()

        })
    }
    

    loadChats() {
        this.ref.onSnapshot((chats) => {
            chats.docChanges.forEach((chatText) => {
                var chat = chatText.doc.data();
                console.log(chat);
                var arr = this.state.chats;
                this.db.collection('Name').doc(chat.id).get().then((userData) => {
                    var data = userData.data();
                    chat.userName = data.name;
                    console.log(chat);
                    arr.unshift(chat);
                    this.setState({chats: arr, chatText: ''});
                });
            })
        })
    }

    handleChange(e) {
        this.setState({chatText: e.target.value})
    }

    render() {
        return (
            <div>
                <AppBar title={'Chat'}/>
                <TextField
                    hintText="Add Chat"
                    floatingLabelText="Add Chat"
                    type="text"
                    value={this.state.chatText}
                    onChange={this.handleChange.bind(this)}/>
                <RaisedButton label='Add Text' primary={true} onClick={this.addChat.bind(this)}/>
                <ul>
                    {this.state.chats.map((chat, i) => {
                        return (
                            <div>
                                <li><b>{chat.text}</b>
                                    <p>Username: {chat.userName} </p><br/>
                                    <small>{new Date(chat.time).toLocaleString()}</small>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>

        )
    }
}

export default Chat;