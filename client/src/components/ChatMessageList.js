import React, { Component } from 'react';

class ChatMessageList extends Component {
    render() {
        return (
            <div style={{width:'50%',float:'right'}}>
                <p>Messages</p>
                <ul>
                    {this.props.users.forEach(u =>
                        <li>{u}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ChatMessageList;
