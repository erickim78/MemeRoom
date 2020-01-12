/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

// App.js
import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            messages: []
        }
    }
    componentDidMount(){
        const chatManager = Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'nappycat',
            tokenProvider: new Chatkit.TokenProvider
        })
        const tokenProvider = new Chatkit.TokenProvider({
        url:
        "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/777432fb-7020-4529-aa8d-d944028417f3/token"
        });

        const chatManager = new Chatkit.ChatManager({
            instanceLocator: "v1:us1:777432fb-7020-4529-aa8d-d944028417f3",
            userId:"nappycat",
            tokenProvider: tokenProvider
        });

        chatManager
            .connect()
            .then(currentUser => {
                console.log("Connected as user: ", currentUser);
                currentUser.subscribeToRoomMultipart({
                    roomId: currentUser.rooms[0].id,
                    hooks: {
                        onMessage: message => {
                            /*
                            const ul = document.getElementById("message-list");
                            const li = document.createElement("li");
                            li.appendChild(
                                document.createTextNode(`${message.senderId}: ${
                                    message.parts[0].payload.content
                                }`)
                            );
                            ul.appendChild(li);
                            */
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    },
                    messageLimit: 8
                });
                const form = document.getElementById("message-form");
                form.addEventListener("submit", e => {
                    e.preventDefault();
                    const input = document.getElementById("message-text");
                    currentUser.sendSimpleMessage({
                        text: input.value,
                        roomId: currentUser.rooms[0].id
                    });
                    input.value = "";
                });
            })
            .catch(error =>{
                console.error("error: ", error);
            });


    }

    render(){
        return(
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages}/>
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default app
