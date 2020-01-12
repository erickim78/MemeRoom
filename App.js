// App.js
import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from '.components/MessageList'
import SendMessageForm from '.components/SendMessageForm'
import RoomList from '.components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

    componentDidMount(){
        const chatManager = Chatkit.ChatManager({
            instanceLocator: instanceLocator
            userId: 'nappycat',
            tokenProvider: new Chatkit.TokenProvider
        })
    }

    render(){
        return(
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default app
