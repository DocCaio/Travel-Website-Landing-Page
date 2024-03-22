import './Destinations.css';
import Europe from './assets/europe.png';
import Italy from './assets/italy.png';
import London from './assets/london.jpg';

export default function Destinations() {
    return (

        <section className='destinations'>
        <small>Top Selling</small>
        <h2>Top Destinations</h2>

        <div className='destinations-cards'>

        <div className='cards-destiny'>
         <img src={Italy} alt='códigos' />
         </div>
         <div className='cards-destiny'>
         <img src={London} alt='códigos' />
         </div>
         <div className='cards-destiny'>
         <img src={Europe} alt='códigos' />
         </div>

        </div>
        </section>
       
    )


}