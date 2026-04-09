import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Definimos el límite de píxeles para móvil
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Seteamos el valor inicial
    setIsMobile(mediaQuery.matches);

    // Escuchamos cambios en el tamaño de la pantalla
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] mt-5  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I am <span className='text-[#915EFF]'>Franky Larios</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Developer.
          </p>
          <p className={`${styles.heroDescription} mt-2 text-white-100`}>
            I’m a Systems Engineer who loves turning
            ideas into efficient, working solutions. I’m
            passionate about problem-solving,
            especially when it comes to making
            systems run better and smarter. Whether
            I’m coding, learning something new, or
            facing a tough challenge, I’m always
            looking for ways to grow and improve.
          </p>
        </div>
      </div>

      <>
        {/* Solo se renderiza si NO es móvil */}
        {!isMobile && <ComputersCanvas />}

        {/* Resto de tu código */}
      </>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#Sobre mi'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;