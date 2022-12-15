import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()
    return (
    <div style={{marginTop:"100px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center",gap:'1rem'}}>

        <p style={{fontSize:"1.5rem"}}>404 page Not found</p>
        <button onClick={()=> navigate("/")} 
        style={{fontSize:"1.5rem", width:"170px",height:"70px",padding:"0.5rem",textAlign:"center",backgroundColor:"gainsboro"}}>
            Go Back To Main Page
        </button>

    </div>
  )
}
