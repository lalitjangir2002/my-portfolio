import "../Home/home.css";
import Data from "./Data";
import Scroll from "./Scroll";
import Social from "./Social";
import { motion } from 'framer-motion';

export default function Home() {
return (
    <motion.section
    variants={{
    hidden: { opacity: 0, y: 175 },
    visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, delay: 0.5 }}
    className="home section" id="home"
    >
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social/>
                <div className="home-img"></div>
                <Data/>
            </div>
            <Scroll/>
        </div>
    </motion.section>
)
}
