import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGooglePlus } from 'react-icons/ai';
import './SociallLogin.css'

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {singInWithGoogle} = useContext(AuthContext)
    const handleGoogle = () =>{
        singInWithGoogle()
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            const saveUser = {name:loggedUser.displayName, image:loggedUser.photoURL, email:loggedUser.email}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() =>{
                
                navigate(from, {replace:true})
            })
            
        })
        
       }
    return (
        <div className="cursor-pointer flex items-center justify-center dabul_line">
            <p onClick={handleGoogle} className="text-2xl font-bold border rounded-full p-2 inline-block bg-[#1363DF] text-white duration-300 hover:bg-[#061E43]"><AiOutlineGooglePlus></AiOutlineGooglePlus></p>
        </div>
    );
};

export default SocialLogin;