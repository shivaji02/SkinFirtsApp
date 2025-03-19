import Axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com/products';


export const fetchProducts = async() => {
   try{ 
       const response = await Axios.get(API_BASE_URL, { timeout: 1000 });
       console.log('response>>>>>>',response.data.length);
       return response.data;
   }catch(error){
    console.error('Error fetching products',error);
    throw new Error('Error fetching products');
}
};


export const fetchProductDetails = async(id:Number)=>{
    console.log('Fetch Product Details for number>>>>>',id);
    try{
        const response = await Axios.get(`${API_BASE_URL}/${id}`);
        console.log('response>>>>>><<<<<>',response.data);
        return response.data;
    }
    catch(error){
        console.error('XXXXXXXXXX Error fetching product details',error);
        throw new Error('Error fetching product details');
    }
};
