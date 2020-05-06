import React from 'react'
import Isi from '.././Isi/Isi'

const Pesan = ({pesan,user})=>{
    return(
        
    <ul>
        {pesan.map(pesan=>(
            <div> <Isi isi={pesan} user={user} /> </div>
        ))}
    </ul>
    ) 
}
export default Pesan 