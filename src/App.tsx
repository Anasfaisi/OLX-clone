import "./App.css";
import { auth } from "./firebase/setup";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AppContext } from "./context/loginContext";
import { ProductProvider } from "./context/productContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser: User | null) => {
      console.log(currentUser, "this is the current user");
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ data: user, setter: setUser }}>
      <ProductProvider>
        {/* Navbar and Footer will always be present */}
        <Navbar />
        
        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />

        </Routes>

        <Footer />
      </ProductProvider>
    </AppContext.Provider>
  );
}

export default App;
