import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './loginSearch.css'

export const LoginPage = () => {


  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  

  const onLogin = ()=>{

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Roman Arenas' );
    
    navigate( lastPath, {
      replace: true
    });

  }

  return (
    <div className="loginB" >
      <h1 className="title">Login</h1>


      <button 
        className="big-button"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
