import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class ChatUserList extends Component {
  render() {
    return (
      <div  style={{width:'50%', float:'left'}}>
        <h1>
          Liste des utilisateurs
        </h1>
        <ul>
          <li>Test</li>
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ChatUserList);
