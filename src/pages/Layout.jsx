import { Outlet, Link } from "react-router-dom";
import "/src/styles/common.css";
import "/src/styles/layout.css"

const Layout = () => {   
    return (     
    <>
    <div id="header">
        <nav>
        <Link to="/" id="link">Home</Link>
        <Link to="/musgroups" id="link">MusGroups</Link>
        <Link to="/privacy_policy" id="link">Privacy Policy</Link> 
        </nav>
    </div>
    
        <Outlet />       
    </>   
    ); 
}; 

export default Layout;