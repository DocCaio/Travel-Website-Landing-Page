import './Partners.css';
import Axon from './assets/axon.png';
import Jetstar from './assets/jetstar.png';
import Expedia from './assets/expedia.png';
import Qantas from './assets/qantas.png';
import Alitalia from './assets/alitalia.png';



export default function Partners() {
    return (

        <section className='partners'>
            <ul  className='partners-list'>
                <li>
                  <img src={Axon} alt='códigos' /> 
                </li>

                <li>
                  <img src={Jetstar} alt='códigos' /> 
                </li>

                <li>
                 <img src={Expedia} alt='códigos' /> 
                </li>

                <li>
                  <img src={Qantas} alt='códigos' /> 
                </li>
                <li>
                  <img src={Alitalia} alt='códigos' /> 
                </li>
            </ul>
        </section>

    )

}