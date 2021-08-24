import React,{FC} from 'react'
import './Layout.scss';
const Layout:FC = ({children}) => {
    return (
        <>
       <nav className="Navbar">
           <h1 className="Navbar__Logo">Weather Guide</h1>
       </nav>
       {children}
       </>
    )
}

export default Layout
