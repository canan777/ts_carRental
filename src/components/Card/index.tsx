import { CarType } from '../../types';
import CustomButton from '../CustomButton';
import { generateImage } from '../../utils/generateImage';
import { motion } from 'framer-motion';
import DetailModal from '../DetailModal';
import { useState } from 'react';

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const translate = {
    fwd: 'Önden Çeker',
    rwd: 'Arakadan İtişli',
    '4wd': '4 Çeker',
    awd: '4 Çeker',
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 7000) + 1500}
        <span className="text-[19px]  self-end font-semibold">
          /gün
        </span>
      </p>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car"
          className="w-full h-full object-contain"
        />
      </div>

      {/* alt kısım */}
      <div className="relative flex w-full mt-2">
        {/* ikonlar */}
        <div className="group-hover:hidden flex  w-full justify-between">
          <div className="flex-center flex-col">
            <img width={25} src="/steering-wheel.svg" />
            <p>{car.transmission === 'a' ? 'Otomatik' : 'Manuel'}</p>
          </div>

          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg" />
            <p>{translate[car.drive]}</p>
          </div>

          <div className="flex-center flex-col">
            <img width={25} src="/gas.svg" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        {/* buton */}
        <div className="group-hover:flex hidden w-full">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* modal */}
      <DetailModal
        car={car}
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};
export default Card;
