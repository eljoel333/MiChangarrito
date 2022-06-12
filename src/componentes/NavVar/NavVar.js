
import OptionsMenu from '../NavVar/MenuList'; 

export default function NavBar(){

    return (
        <>
        <nav className='NavbarItems'> 
              
               <ul className='nav-menu'>
                   {OptionsMenu.map((item,index)=>{
                       return (
                        <li key={index}> <a className={item.className} href={item.url}> {item.titulo}</a> </li>
                       )
                   }
                   )}
                  
               </ul>
               <h1 className='navbar-logo'>Mi Changarrito <i className='fa fa-solid fa-cart-arrow-down'></i></h1>
                <div className='menu-icon' >
                    <i className='fas fa-bar'></i>
                </div>
        </nav>
      
      
        </>
    )
}
