import {NavLink, useNavigate} from 'react-router-dom';


export const Navar = () => {

    const navigate = useNavigate()

    const onLogout = ()=>{
        navigate("login", {
            replace: true
        })
    }

    return(
    <nav className='nav'>
        <div className='nav_1'>
            <ul className='nav_2'>
            <NavLink to="marvel" className="link">Marvel</NavLink>
            <NavLink to="dc" className="link">DC</NavLink>
            </ul>
            <ul className='nav_2'>
            <NavLink to="search" className="link">Search</NavLink>
            <NavLink to="login" className="link" onClick={onLogout}>Login</NavLink>
            </ul>
        </div>
    </nav>
   )
}