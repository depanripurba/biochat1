const http = require('http');
const express = require("express")
const socketio = require("socket.io")
const router = require("./router")
const { addUser, removeUser, getUser, getUsersInRoom } = require('./user')
const App = express()

const server = http.createServer(App)
const io = socketio(server)
App.use(router)
  
io.on('connect', (socket) => {
    console.log("pesan masuk 1")
    socket.on('join', ({ nama, room }) => {
        const id = socket.id
        const {user} = addUser({id: socket.id,nama,room})
        console.log(user,nama,room)
        socket.join(user.room)
        socket.emit('pesan', { user: 'admin', text: `${user.nama}, Selamat datang di ruang  ${user.room}.`});
        socket.broadcast.to(user.room).emit('pesan', { user: 'admin', text: `${user.nama} has joined!` });
    });
  socket.on('reqpesan',({pesan})=>{
      io.to("room1").emit('pesan',{user: "kampret",text: pesan})
  })
    socket.on('disconnect',()=>{
      io.to()
        console.log('user meninggalkan ruangan')
    })
     
  });



server.listen(process.env.PORT || 5000, () => console.log(`Server sedang mengudara di lokal jaringan`));