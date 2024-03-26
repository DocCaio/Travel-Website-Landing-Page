import  './Customers.css';
import Guy from './assets/guy.svg';

export default function Customers() {
    return (
        <section className="costumers">
            
           
       

        <div>
            <small>Testimonials</small>
            <h2>
                What people say <br/>
                about Us.
            </h2>
        </div>

        <div className="coments">
         <img src={Guy} alt='códigos' />
            <p>
                
                “On the Windows talking painted pasture yet
                 its express parties use. Sure last upon he
                  same as knew next. 
                Of believed or diverted no.”
            </p>
            <h5>Mike taylor</h5>
        </div>

        
    </section>

    )


}