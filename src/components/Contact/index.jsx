import './Contact.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Contact() {
    return (

        <footer>

            <section  className='contact'>
            <div>
              <h3>Jadoo.</h3>
              <p>Book your trip in minute, get full<br/>
              Control for much longer.</p>
            </div>

            <div>
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </ul>
            </div>

            <div>
            <h4>Contact</h4>
            <ul>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
            </ul>
                
            </div> 

            <div>
            <h4>More</h4>
            <ul>
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
            </ul>

            </div>  

            <div>
            <span>Discover our social medias</span>
            <ul className='social'>
                <li><IoLogoWhatsapp /></li>
                <li><FaInstagramSquare /></li>
                <li><RiTwitterXLine /></li>
            </ul>  
             
             
         
            
                    
           

            </div> 

            
            </section>

            <div className='rights'>
            
            <small>All rights</small>

            </div>
        </footer>


     )

    }