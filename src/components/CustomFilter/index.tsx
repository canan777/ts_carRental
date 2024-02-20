import { useEffect, useState } from 'react';
import { OptionType } from '../../types';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

interface CustomProps {
  title: string;
  paramName: string;
  options: OptionType[];
}

const CustomFilter = ({ title, paramName, options }: CustomProps) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  //seçilen filtreye göre url'i güncelle
  useEffect(() => {
    if (selected?.value) {
      // seçilen seçeneğin value'su varsa url'e parametreyi ekle
      params.set(paramName, selected?.value.toLowerCase());
    } else {
      // value'su yoksa url'den parametreyi kaldır
      params.delete(paramName);
    }

    // değişikliği url'e aktar
    setParams(params);
  }, [selected]);

  const defaultValue = {
    label: params.get(paramName),
    value: params.get(paramName),
  };

  return (
    <div className="text-black w-fit">
      <Select
        defaultValue={defaultValue}
        onChange={(e) => setSelected(e)}
        placeholder={title}
        className="min-w-[100px]"
        options={options}
      />
    </div>
  );
};

export default CustomFilter;