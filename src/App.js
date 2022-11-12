import CryptoSection from "./components/CryptoSection";
import Header from "./components/Header";
import Numbers from "./components/Numbers";

import MobileNav from "./components/MobileNav";
import { useState } from "react";



function App() {
    const [showNav,setShowNav]= useState(false)
  return (
       <div className="App w-full">
          {showNav&&<MobileNav  setShowNav={setShowNav} />}
          <Header showNav={showNav} setShowNav={setShowNav} />
          <Numbers showNav={showNav} setShowNav={setShowNav} />
          <CryptoSection />
    
      </div> 
  
  );
}

export default App;
