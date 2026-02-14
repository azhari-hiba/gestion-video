import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouter } from "../videosSlice";
import { useNavigate } from "react-router-dom";

export default function AjouterVideo(){
    const [id,setId]=useState("");
    const [titre,setTitre]=useState("");
    const [url,setUrl]=useState("");
    const [image,setImage]=useState("");
    const [duree,setDuree]=useState("");

    const dispatch=useDispatch();
    const videos=useSelector((state)=>state.videos)
    const navigate=useNavigate();

    const Ajouter=(e)=>{
        e.preventDefault();
        dispatch(ajouter({id:videos.length+1,titre,url,image,duree}))
        setId('');
        setTitre('');
        setUrl('');
        setImage('');
        setDuree('');
        navigate('/videos')
    }
    return(
        <div>
         <form onSubmit={Ajouter}>
            <input type="text" value={id} 
            onChange={(e)=>setId(e.target.value)} 
            placeholder="id"/><br></br>
            <input type="text" value={titre} 
            onChange={(e)=>setTitre(e.target.value)} 
            placeholder="titre"/><br></br>
            <input type="text" value={url} 
            onChange={(e)=>setUrl(e.target.value)} 
            placeholder="url"/><br></br>
            <input type="text" value={image} 
            onChange={(e)=>setImage(e.target.value)} 
            placeholder="image"/><br></br>
            <input type="text" value={duree} 
            onChange={(e)=>setDuree(e.target.value)} 
            placeholder="duree"/><br></br>
            <button>Ajouter</button>
         </form>
        </div>
    )
}