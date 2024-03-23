import './Book.css';
import Red from './assets/red.svg';
import Blue from './assets/blue.svg';
import Yellow from './assets/yellow.svg';
import Girl from './assets/girl.jpg';


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
       </section>
    )

}