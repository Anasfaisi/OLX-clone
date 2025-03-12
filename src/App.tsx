import './App.css'
import Home from './pages/Home'
import {auth} from './firebase/setup'
import {User} from "firebase/auth"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Sell from './pages/Sell'
import { useEffect,useState } from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {AppContext} from './context/loginContext'


 
function App() {
 
    const [user, setUser] = useState<User| null>(null);
    // const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((currentUser:User | null) => {
      console.log(currentUser,"this is the current user")
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <>
    <AppContext.Provider value={{data:user,setter:setUser}}>

      <Navbar />
      <Footer />

      
      </AppContext.Provider>
    </>
  );
}

export default App
