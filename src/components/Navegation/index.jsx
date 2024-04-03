import { useRef, useState } from 'react';
import './Navegation.css';
import './useClick';


const Navegation = () => {

  const dropDownRef = useRef(null);
  const [isActive , setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
    return (

        <header className='container'>   

        <div className='container-menu'> 
        <button onClick={onClick} className='menu_button'>
        &#9776;
          </button>   
             
            <nav ref={dropDownRef}  className={`menu ${  isActive ? "active" : "inactive"}`}>
                <img  src="/logo.svg" ></img>
                <ul>
                    <li>
                      <a href="#">Desitnations</a>                      
                    </li>
                    <li>
                        <a href='#'>Hotels</a>
                    </li>

                    <li>
                    <a href='#'>Flights</a>                        
                    </li>
                    <li>
                        <a href='#'>Bookings</a>  
                        
                    </li>

                    <li>
                      <a href='#'>Login</a>                    
                    </li>

                    <li>
                      <a id='sing' href='#'>Sign up</a>                        
                    </li>
                    
                </ul>
            </nav>
            </div>   
        </header>

     )


    }

     export default Navegation;