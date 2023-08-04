import './images/style.css';
import Home from './home';

import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import Success from './success';


function App({email}) {
  console.log(email)
  return (

    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={ <Home email />} />
         <Route path='success' element={<Success emails={email}/>} />
       </Routes>
      
      </BrowserRouter>
      
      
      
      
      
    
    </div>
  );
}

export default App;
