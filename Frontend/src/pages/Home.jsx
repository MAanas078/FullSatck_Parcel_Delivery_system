import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const words = ["FAST,", "SECURE", "&", "RELIABLE", "PARCEL", "DELIVERY", "ANYTIME,", "ANYWHERE!"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4C724", "#9B59B6", "#E74C3C", "#1ABC9C", "#FF8C00"];

  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center justify-between p-[50px] text-gray-300">
        <motion.h2
          className="text-3xl font-bold w-[50%] p-[50px]"
          initial={{ opacity: 5 }}
          animate={{ opacity: 5}}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="mr-2 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 3, color: colors[index] }}
              transition={{
  duration: 0.5,
  delay: index * 0.6,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",      
  scale: [1, 1.1, 1],     
  opacity: [0, 1, 0.8],   
  letterSpacing: ["0px", "2px", "0px"],  
  rotate: [0, 2, -2, 0],  
}}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.img
  src="/hero.png"
  alt="Parcel png"
  className="w-auto h-auto" 
  animate={{
    y: [0, -10, 0], 
  }}
  transition={{
    duration: 2,     
    repeat: Infinity, 
    repeatType: "reverse", 
    ease: "easeInOut"  
  }}

/>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
