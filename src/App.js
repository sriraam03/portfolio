import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {
  const [isLoading,setIsLoading] = useState(true);
  useEffect( () => {
    const fakeDataFetch = () =>{
      setTimeout( () =>{
          setIsLoading(false);
      },2000);
    }
    fakeDataFetch();
  } , [])
  return isLoading ? (
    <Loader/>
  ) :(
    <div>
    <Navbar />
    <Home />
    <About/>
    <Projects/>
    <Contact/>
  </div>
  );
    
    
  
}

export default App;
