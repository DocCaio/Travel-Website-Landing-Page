import './Travel.css';


const Travel = () => {
    return (

        <header>
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
            <div className='text'>
                
            <h2>Best Destinations around the world</h2>
            <h1>
                Travel, enjoy<br/> 
                and live a new<br/> 
                and full life
            </h1>
            <p>
                Built Wicket longer admire do barton vanity itself do in it.<br/>  
                Preferred to sportsmen it engrossed listening. Park gate <br/> 
                sell they west hard for the.
            </p>
            
            <div>  

               <a href='#'>Find out more</a>
                
               <div className='play-btn'> 
               <img  src="assets/Play-button.svg" ></img>
               <small>Play Demo</small>    
               </div> 
            
            </div>
            
           
            </div>

            <img  src="assets/Traveller-main.png" ></img>
           
            
        </header>

     )


    }

     export default Travel;