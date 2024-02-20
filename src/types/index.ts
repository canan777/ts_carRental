import { MouseEventHandler } from 'react';

// Tip Tanımı
export type ButtonPropsType = {
  disabled?: boolean;
  designs?: string;
  btnType?: 'submit' | 'reset' | 'button';
  title: string;
  rIcon?: string;
  // tıklanma olayında çalışan fonksiyon
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

// api'dan gelen araç verisnin tipi
export interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: 'fwd' | 'rwd' | 'awd' | '4wd';
  fuel_type: 'gas' | 'diesel' | 'electricity';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: 'a' | 'm';
  year: number;
}

export type OptionType = {
  label: string;
  value: string;
};