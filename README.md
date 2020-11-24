# Nodejs-soket-IO-application
Demo for Nodejs-soket-IO-application 

# why we are use soket-io 

Libraries like socket.IO are needed when we need real-time in our app. Let me explain this in little more detail. Let's assume that you are developing a game, which is multiplayer and 2 or more users can play that simultaneously. Then, in that case, you won't be making HTTP or HTTPS calls because of many reasons and one of them is that their packet size is large and other is that these calls are very slow. In such scenarios we use libraries like sockets to send and receive data to and from the server. Sockets are really fast and are capable of sending only those data packets which are needed. Using HTTP programming you can never create any multiplayer game or any app which will be interacting with a server on a realtime basis.

Let's take another example. Let's assume that you are working on a chat application. When user A is typing something then user B should know that A is typing (similar to gtalk of facebook messenger). If you will use HTTP calls at that point of time then "B" will never be able to see the actual status of the other person because of the delay. So what we can use is sockets so that when user A is typing anything then his device will send only one data packet which will just notify the server that he is typing and will be delivered to user B, this process is really fast (almost realtime) and will reduce the data transfer also.
