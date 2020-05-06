import React,{useState, useEffect} from 'react'
import "./Chat.css"
import Pesan from '.././Pesan/Pesan'
import io from 'socket.io-client'
const Chat = (props)=>{
    const [nama, setNama] = useState(props.match.params.nama)
    const [room, setRoom] = useState(props.match.params.room)
    const [messages, setMessages] = useState([]);
    const [pesan, setPesan] = useState()
    const ENDPOINT = 'localhost:5000'
    let socket
    useEffect(()=>{
        socket = io(ENDPOINT)
        socket.emit('join', { nama, room });
    },[nama,room])
    useEffect(() => {
        socket.on('pesan', message => {
          setMessages(messages => [ ...messages, message ]);
          console.log(message)
        });
    }, []);
    const kirimpesan = (event) => {
        event.preventDefault();
        socket = io(ENDPOINT)
        socket.emit('reqpesan', { pesan });
        
      }
    return( 
        
        <div>
            <div className="chatbox"> 
                {console.log(messages)}
                <Pesan pesan ={messages} user={nama} />
            </div> 
            <div>
                <input type="text" name="chat" onChange={(e)=>setPesan(e.target.value)} /> <button type="submit" onClick={kirimpesan} >Send</button>
            </div> 
        </div>
    )
}
export default Chat