import 'babel-polyfill';
import express from 'express';
import soketIo from 'socket.io'

const port = 1414;
const app = express();


const applicationServer = app.listen(port, () =>
    console.log(`Nodejs-soket-IO-application listening on port ${port} !`),
)

// const io = (soketIo)(applicationServer);
const io = soketIo(applicationServer);

io.on('connection', soketio => {
    console.log(`Socket-io is connected`);
    
        io.emit("connectionSuccessfull", { connect: true });
  
    soketio.on('disconnect', () => { 
        console.log(`Socket-io is disconnected.`);
    });

});