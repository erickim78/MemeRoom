/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

//Code Begins Here
/*
const tokenProvider = new Chatkit.TokenProvider({
    url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/777432fb-7020-4529-aa8d-d944028417f3/token"
});

const chatManager = new Chatkit.ChatManager({
    instanceLocator: "v1:us1:777432fb-7020-4529-aa8d-d944028417f3",
    userId:"nappycat",
    tokenProvider: tokenProvider
});

function submitMsg(messageToSend){
    ChatManager
    .connect()
    .then(currentUser => {
        currentUser.sendSimpleMessage({
            text: messageToSend,
            roomId: '43b41d93-d0c1-4d99-8004-bd01be4a6591'
        }),
        currentUser.subcribeToRoomMultipart({
            roomId: '43b41d93-d0c1-4d99-8004-bd01be4a6591',
            messageLimit: 0,
            hooks: {
                onMessage: message => {
                    console.log(currentUser.id, message.parts[0].payload.content, message.createdAt)
                }
            },
        });
    })
    .catch(error => {
        console.error("  error: ", error);
    })
}

const myForm = document.getElementById('message-form');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let yourMessage = document.getElementById("message-text".value);
    submitMsg(yourMessage);
})
*/
