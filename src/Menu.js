import {Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <nav>
            <Link to={'/'}>Acceuil</Link>
            <Link to={'/videos'}>Liste de videos</Link>
            <Link to={'/add'}>Ajouter Video</Link>
            </nav>
        </div>
    )
}