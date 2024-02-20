//* Bize parametre olarak gelen bir araba için
//* aracın fotoğraf url'ini oluşturcaz
//? temel url: https://cdn.imagin.studio/getimage
//* aracın bilgilerine göre dinamik olark elde ediceğimiz sonuç:
// ? https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3

import { colors } from '../constants';
import { CarType } from '../types';

export const generateImage = (
  car: CarType,
  angle?: string
): string => {
  // javascriptin url classından örnek almamız sayesinde
  // url üzrinde değişikleri kolayca yapmamızı sağlayacak
  // methodlara erişimimiz açıldı
  const url: URL = new URL('https://cdn.imagin.studio/getimage');

  // url'e dinamik bir şekilde arama paramtresi ekleme
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model.split('/')[0]);
  url.searchParams.append('zoomType', 'fulscreen');

  // açı varsa açıyı ekler
  if (angle) {
    url.searchParams.append('angle', angle);
  }

  // her url oluşturğunda rastgele bir renk belirler
  const idx = Math.floor(Math.random() * colors.length);

  url.searchParams.append('paintId', colors[idx]);

  // oluşturduğumuz url'i fonksiyonun çağrıldığı yere döndür
  return url.href;
};

