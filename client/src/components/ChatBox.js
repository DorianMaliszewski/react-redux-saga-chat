import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chat';

function mapStateToProps(state) {
    return {

    };
}

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={(e) => this.setState({message: e.target.value})}
                    value={this.state.message}
                    placerholder="Entrez votre message"
                    style={{width:'100%'}}
                >

                </textarea>
                <button onClick={e => this.sendMessage()}>Envoyer le message</button>
            </div>
        );
    }

    sendMessage() {
      this.props.dispatch(addMessage(this.state.message));
    }
}

export default connect(
    mapStateToProps,
)(ChatBox);
