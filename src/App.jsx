import Navbar1 from './components/Navbar1'
import About1 from "./components/About1";
import Contact1 from "./components/Contact1";
import Skills1 from "./components/Skills1"
import Education1 from "./components/Education1";
import Projects from "./components/Project1";


import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log('App Loaded')
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box>
   <Navbar1 />
   <About1 />
   <Education1 />
   <Skills1 />
   <Projects />
   <Contact1 />
    </Box>
  );
};
export default App;
