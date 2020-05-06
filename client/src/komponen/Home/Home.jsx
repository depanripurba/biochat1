import React,{useState, useEffect} from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'
const Home = ()=>{
    const[nama, setNama] = useState('')
    const[room, setRoom] = useState('')
    useEffect(()=>{
        console.log(nama)
    })
    return(
        <center>
        <div className="formbox">
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td>Nama</td><td><input type="text" name="nama" value={nama} onChange={(event)=>setNama(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Ruangan</td><td><input type="text" name="ruangan"value={room} onChange={(event)=>setRoom(event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td> <Link to= {"/chat/"+nama+"/"+room } >Sign</Link> </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        </center>
      
    )
}

export default Home