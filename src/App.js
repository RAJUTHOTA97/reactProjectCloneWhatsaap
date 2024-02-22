import logo from './logo.svg';
import './App.css';
import Signin from './components/sign-in';
import Main from './components/main';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/chat';
import PhoneSignin from './components/phonesignin';






function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/main' element={  <Main/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route  path='/phone' element={ <PhoneSignin/>}/>
         
      </Routes>
      
    
   
    </div>
  );
}

export default App;
