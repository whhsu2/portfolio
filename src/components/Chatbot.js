import React from 'react';
import { Component } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class ChatBot extends Component {
    render() {
        return (
            <div>
                <Widget />
            </div>
        );
    }
};

export default ChatBot;

