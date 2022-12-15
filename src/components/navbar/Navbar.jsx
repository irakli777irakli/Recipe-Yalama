import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {BsHeartFill} from 'react-icons/bs'
import FavoritesSidebar from '../sidebar/FavoritesSidebar'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'

export default function Navbar() {
    const navigate = useNavigate()
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const{cart} = useGlobalContext()

    const homeNavigate = () =>{
        navigate('/')
    }


    const scroll = (whichone) => {
        homeNavigate()
        setIsSidebarOpen(false);
       if(whichone === "abu"){
        console.log(window.innerHeight)
        // to scroll at the button regardless of px count
        window.scrollBy(0,window.innerHeight + 3120);
       }
    //    hardcoded value. I know that nav is 70px.
       if(whichone === "exp"){
        window.scrollBy(0,70)
       }
       
    }

    useEffect(()=>{
        // when cart `id` of meals changes Nav must eable Sidebar to re render recipes
        // otherwise only when sidebar is onpen than it can perform the action
        
    },[cart])


  return (
    <nav className='main_nav'>
        <div className='nav_inner__div'>
            <div className='logo_brand'>
                <img src='https://cdn-icons-png.flaticon.com/512/562/562678.png' className='logo_img' alt='logo'/>
                <span className='brand' onClick={()=> homeNavigate()}>YalaVa</span>
                
            </div>
            <div className='about_search_etc'>
                <ul>
                    <li onClick={()=>scroll("exp")}>Explore</li>
                    <li onClick={()=>scroll("abu")}>About Us</li>
                  
                </ul>
                <div className='favorites_wrapper'>
                <BsHeartFill className='favorites_toggle' onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
                <div className='favorites_amount_div'>
                    <p className='favorite_count'>{cart?.length || 0}</p>
                </div>
                </div>
                {isSidebarOpen && <FavoritesSidebar/>}
                
            </div>
        </div>
    </nav>
  )
}
