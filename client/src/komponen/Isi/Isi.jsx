import React from 'react'
import "./Isi.css"
const Isi = ({isi, user})=>{
    return(
        <div className="left">
        <div className="user"> {user} </div> <div className="text"> {isi.text} </div>
        </div>
    )
} 

export default Isi
