import './App.css'
import Header from './component/header/Header'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skills from './component/Skills/Skills';
import Education from './component/Qualification/Education';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import ScrollUp from './component/Scrollup/ScrollUp';
import { motion } from 'framer-motion';
import { useRef} from 'react';
import { useFollowPointer } from './Use_Follow_Pointer';

function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

//   const [light,setLight] = useState(false);
//   const toggleDarkMode = () =>{
//     setLight(!light);
// }

  return (
    // <div className={`App ${light ? 'dark-mode' : 'light-mode'}`}>
    <div>
    {/* <Header toggleDarkMode={toggleDarkMode}/> */}
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>

    {/* overlay */}
    <motion.div
    ref={ref}
    className="overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, x, y }}
    transition={{
      type: "spring",
      stiffness: 90,
      restDelta: 0.01
    }}/>
    </div>
  )
}

export default App
