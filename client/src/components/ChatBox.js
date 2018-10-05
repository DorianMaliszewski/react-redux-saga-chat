import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                >

                </textarea>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ChatBox);