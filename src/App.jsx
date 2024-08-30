/*import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";*/
import Navbar1 from './components/Navbar1'
import About1 from "./components/About1";
import Contact1 from "./components/Contact1";



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
   <Contact1 />

      {/*{loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          Hello
          <Navbar></Navbar>
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      )}*/}
    </Box>
  );
};
export default App;
