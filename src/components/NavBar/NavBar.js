import './NavBar.scss'
import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="nav">
            <Link to ='/Home'>
                <img className='site-Logo' src='/assets/Logo.png' alt='Logo'></img>
            </Link>
            <ul>
                <CustomLink to = '/SobreLuna'>Sobre Luna</CustomLink>
                <CustomLink to = '/Proyectos'>Proyectos</CustomLink>
                <CustomLink to = '/Apoyo'><img className='item-Donation' src='/assets/Donation.png' alt='Donation'></img></CustomLink>
               
            </ul>
        </nav>
        )
 }

 function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end : true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
 }
 
 
