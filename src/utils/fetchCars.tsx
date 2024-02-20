import { CarType } from "../types";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 
        '37781a9629mshb2b0eda2ccbb0ebp1ba12ajsn267bb0e69ced',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	},
};

type FilterType = {
    make?: string;
    model?: string;
    limit?: string;
    fuel_type?: string;
    year?: string;
  };

export async function fetchCars(
    filters: FilterType
    ):Promise<CarType[]>{
// varsayılan değer ataması yaptık
// çünkü objenin bu değerleri tanımsız da gelebilir
// tanımsız geldiği durumda direkt bmw arattık
   const {
     make = 'bmw',
     model= 'm3', 
     limit="5",
     fuel_type ="",
     year = '',  
    } = filters;


    const res = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,
   options
   );

   const data = await res.json();

   return data;
}
  

    