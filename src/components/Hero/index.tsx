import CustomButton from '../CustomButton';
import { motion } from 'framer-motion'; 

const Hero = () => {
  return (
    <div className="hero">
      
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Özgürlüğü Hisset, Yolculuğa Başla
        </h1>

        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır
          mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <CustomButton title="Arabaları Keşfet" designs="mt-10" />
      </div>
      <div className="flex justify-center">
      <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
         className="object-contain"
          src="/hero.png"
          alt="car"  />
      </div>
    </div>
  )
}

export default Hero