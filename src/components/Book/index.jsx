import './Book.css';
import Red from './assets/red.svg';
import Blue from './assets/blue.svg';
import Yellow from './assets/yellow.svg';
import Girl from './assets/girl.jpg';
import Leaf from './assets/leaf.svg';
import Map from './assets/map.svg';
import Arrow from './assets/arrow.svg';



export default function Book() {
    return (
       <section className='book'>

        <div>
        <small>Easy and Fast</small>
        <h2>Book your next trip <br/> in 3 easy steps</h2>
        
        <div>

        <div className='book-trip'>            
        <img src={Yellow} alt='códigos' />
        <div>
            <h4>Choose Destination</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br/> 
             adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div>

        <div className='book-trip'>            
        <img src={Red} alt='códigos' />
        <div>
            <h4>Choose Destination</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br/> 
             adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div>

        <div className='book-trip'>            
        <img src={Blue} alt='códigos' />
        <div>
            <h4>Choose Destination</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br/> 
             adipiscing elit. Urna, tortor tempus. </p>
        </div>
        </div> 
       
   
        </div>

        <div>

        </div>


        </div>

        <div className='book-card'>
        <img src={Girl} alt='códigos' />

        <h4>Trip To Greece</h4>

        <div className='book-card-icons'>      


        <img src={Leaf} alt='códigos' />
        <img src={Map} alt='códigos' />
        <img src={Arrow} alt='códigos' />

        </div>
            

        </div>



       </section>
    )

}