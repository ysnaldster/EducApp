import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

export default function PublicadoScreen() {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"}}>
           <Link to="/publicar" className="alert alert-success p-5 text-center" role="alert">
               Se publicó correctamente. <br/> Pulsa aquí para volver<br/><br/>  <ArrowBackIosOutlinedIcon/>
           </Link>
        </div>
    )
}
