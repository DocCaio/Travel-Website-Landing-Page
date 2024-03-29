import  './Send.css';
import Fly from "./assets/fly.svg";
export default function Send() {
    return (
        <section className='send'>
            <div className='light'>
            <img src={Fly} alt='códigos' /> 
                <h3>
                    Subscribe to get information, latest news and other <br/>
                 interesting offers about Jadoo
                </h3>
                <input type="text" id="usr" placeholder="Your email"></input>
                <button  type="button">Subscribe</button>


            </div>
        </section>
    )

}