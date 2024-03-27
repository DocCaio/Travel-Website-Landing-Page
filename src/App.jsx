import './App.css';
import Navegation from './components/Navegation';
import Trip from './components/Trip';
import Category from './components/Category';
import Destinations from './components/Destinations';
import Book from './components/Book';
import Customers from './components/Customers';
import Partners from './components/Partners';
import Send from './components/Send/assets';






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
  </div>
  
   
    
    
   
  )

  
 
}

export default App
