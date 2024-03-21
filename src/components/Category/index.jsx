import './Category.css';
import Airplane from './assets/airplane.svg';
import Ant from './assets/ant.svg';
import Mic from './assets/mic.svg';
import Machine from './assets/machine.svg';


export default function Category() {
    return (
        <section className='category'>
            <small>CATEGORY</small>
            <h2>We Offer Best Services</h2>

            <div className='cards'>
                <ul>
                    <li>
                    <img src={Ant} alt='códigos' />
                    <h3>Calculated Weather </h3>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </li>
                    <li>
                    <img src={Airplane} alt='códigos' /> 
                    <h3>Best Flights</h3>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>                   
                    </li>
                    <li>
                    <img src={Mic} alt='códigos' />
                    <h3>Local Events</h3>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                    </li>
                    <li>
                    <img src={Machine} alt='códigos' />
                    <h3>Customization</h3>
                    <p>We deliver outsourced aviation services for military customers</p>
                    </li>
                </ul>

            </div>
        </section>
    )

}