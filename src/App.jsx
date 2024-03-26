import './App.css';
import Navegation from './components/Navegation';
import Trip from './components/Trip';
import Category from './components/Category';
import Destinations from './components/Destinations';
import Book from './components/Book';
import Customers from './components/Customers';




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
    </div>
  </div>
  
   
    
    
   
  )

  
 
}

export default App
