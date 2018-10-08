import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatBox from '../components/ChatBox';
import ChatUserList from '../components/ChatUserList';
import ChatMessageList from '../components/ChatMessageList';

function mapStateToProps(state) {
  return {

  };
}

class Chat extends Component {
  render() {
    return (
      <div>
        <ChatUserList />
        <ChatMessageList users={this.props.users ? this.props.users : []}/>
        <ChatBox />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Chat);
