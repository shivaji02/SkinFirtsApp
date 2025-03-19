import { View,Text } from 'react-native'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchProductDetails}   from '../../service/productapi';
import { useRoute } from '@react-navigation/native';


const ProductDetail = () => {
  const  route = useRoute();
  const  {productId}  = route.params as {productId: any};
  console.log("********",route.params);
  const {data:Detail,isLoading,error} = useQuery({
        queryKey:['productDetail',productId],
        queryFn:()=>fetchProductDetails(productId),
    });
    console.log('Product Id>>>>>',productId);

    console.log('Product Detail >>>>',Detail);
    if(isLoading){
        return <Text>Loading...</Text>
    }
    if(error){
        console.log('Error please try again', error.toString());

        return <Text>Error please try again, {error.toString()}</Text>
    }
    return (
        <View>
            <Text>Product Detail</Text>
            <Text>{Detail.title}</Text>
            <Text>{Detail.description}</Text>
        </View>
    )
}

export default ProductDetail;