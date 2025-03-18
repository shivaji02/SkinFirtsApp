import Axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com/products';


export const fetchProducts = async() => {
   try{ const response = await Axios.get(API_BASE_URL);
   console.log('response>>>>>>',response.data.length);
   return response.data;
}catch(error){
    console.error('Error fetching products',error);
    throw new Error('Error fetching products');
}

};
