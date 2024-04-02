import './Navegation.css';


const Navegation = () => {
    return (

        <header>
          
             <button id="menu-button">&#9776;</button>
            <nav className='nav_bar'>
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
           
        </header>

     )


    }

     export default Navegation;