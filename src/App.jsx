import './App.css';
import Navegation from './components/Navegation';
import Trip from './components/Trip';
import Category from './components/Category';
import Destinations from './components/Destinations';
import Book from './components/Book';
import Customers from './components/Customers';
import Partners from './components/Partners';
import Send from './components/Send';
import Contact  from './components/Contact';






function App() {
 

  return  (  
    
    <div className='container'>
      <Navegation/>
    <div>
      <Trip/>
      <Category/>
      <Destinations/> 
      <Book/> 
      <Customers/>
      <Partners/>
      <Send/>
    </div>
     <Contact/>
  </div>    
   
  )

  
 
}

export default App
