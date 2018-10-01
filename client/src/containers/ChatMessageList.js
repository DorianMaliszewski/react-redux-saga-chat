import React, { Component } from 'react';

class ChatMessageList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.usersConnected.forEach(u =>
                        <li>{u}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ChatMessageList;