import React, {Component} from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chatText: {
                name: '',
                userId: ''
            }
        }
    }

    addText() {
        var db = firebase.firestore();
        var obj = this.state.chatText;
        this.id = this.state.chatText.userId;
        db.collection('Name').doc(this.id).set(obj);
        // db.collection('Name').add(obj);
    }

    handleChange(p, e) {
        var chatText = this.state.chatText;
        chatText[p] = e.target.value;
        this.setState({chatText: chatText});
    }

    nextPage() {
        this.addText();
        var id =this.state.chatText.userId;
        this.props.history.push('/chat/' + id);
    }

    render() {
        return (
            <div>
                <AppBar title="Title"/>
                <TextField hintText="Name" floatingLabelText="Name" type="text"
                           value={this.state.chatText.name} onChange={this.handleChange.bind(this, 'name')}/><br/>
                <TextField hintText="UserId" floatingLabelText="User Id" type="text"
                           value={this.state.chatText.userId} onChange={this.handleChange.bind(this, 'userId')}/><br/>
                <RaisedButton label='Next' secondary={true} onClick={this.nextPage.bind(this )}/>
            </div>
        )
    }
}


export default Main;