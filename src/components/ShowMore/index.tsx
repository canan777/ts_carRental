import { useSearchParams } from 'react-router-dom';
import CustomButton from '../CustomButton';

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //1) URL'de limit parametresi yoksa:
  //* kullanıcı projeye yeni girmiştir ve ekranda 5 araç vardır
  //* butona tıklanınca url'e limit parametresi 10 olarak eklenicek

  //2) URL'de limit parametresi varsa:
  //* kullanıcı en az bir kez butona basmıştır
  //* butona basınca önceki parametrenin 5 fazlasına güncelliyicez

  // url'den limit parametresini al
  const limit = Number(searchParams.get('limit')) || 5;

  const handleLimit = () => {
    // yeni limiti belirle
    const newLimit = String(limit + 5);

    // parametreleri güncelle
    // ama güncellerken eski parametrelerin üzerine ekle
    searchParams.set('limit', newLimit);

    setSearchParams(searchParams);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton handleClick={handleLimit} title="Daha Fazla" />
      )}
    </div>
  );
};

export default ShowMore;