import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StyleSheet, FlatList, Image, Platform } from 'react-native';
import { useProductStore } from '../../store/productStore';
import { fetchProducts } from '../../service/productapi';
import { heightPercentageToDP, scale, widthPercentageToDP } from '../../utils/responsiveUtils';
const ProductScreen = () => {

    const { totalProduct, scrolledProduct, setTotalProduct, setScrolledProduct } = useProductStore();
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const handleScroll = (event: any) => {
        if (!products) { return 'No products' };
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const scrolled = Math.floor((contentOffset.y / (contentSize.height - layoutMeasurement.height)) * totalProduct);
        setScrolledProduct(scrolled);
    };

    useEffect(() => {
        if (products) { setTotalProduct(products.length);}
    }, [products, setTotalProduct]);

    const renderProducts = ({ item }: any) => {
        return (
            <View style={styles.productContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{item.title}</Text>
                {/* <Text style={styles.productDesc}>{item.description}</Text> */}
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>);
    }

    if (isLoading) {
        return <Text style={styles.ProductScreen}>Loading...</Text>
    }
    if (error) {
        return <Text style={styles.error}>Error please try again</Text>
    }
    return (
        <View style={styles.container}>
            <View style={styles.scrollTracker}>
                <Text style={styles.scrollText}>
                    {totalProduct - scrolledProduct}/{totalProduct} 
                </Text>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                // keyExtractor={(item)=>item.id}
                renderItem={renderProducts}
                flashScrollIndicators={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                numColumns={2}
                contentContainerStyle={styles.productContainer}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: widthPercentageToDP('48%'),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    error: { textAlign: 'center', color: 'red', fontSize: 20 },
    ProductScreen: { textAlign: 'center', color: 'green', fontSize: 20 },
    scrollTracker: {
        width: widthPercentageToDP('10%'),
       position:'absolute',
       alignContent:'stretch',
         bottom: 70,
        // backgroundColor: 'blue',
    },
    scrollText: {
        // justifyContent: 'flex-end',
        fontSize: 15,
        backgroundColor: 'black',
        color: 'red',
        borderRadius: 50,
        width: widthPercentageToDP('5%'),
        height: heightPercentageToDP('5%'),
        textAlign: 'center',
    },
    productImage: {
        width: widthPercentageToDP('20%'),
        height: heightPercentageToDP('10%'),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,

    },
    productContainer: {
        justifyContent: 'space-between',
        borderBlockColor: 'black',
        borderWidth: 1,
        padding: 10,
        overflow:'hidden',
        marginLeft:Platform.OS === 'ios' ? -3.5 : 0,
        
    },
    productDesc: {
        fontSize: 12,
        color: 'grey',
        marginVertical: 5,
        width: widthPercentageToDP('20%'),
    },
    productPrice: {
        fontSize: 16,
        fontFamily: 'LeagueSpartan-black',
        color: 'black',
        marginVertical: 5,
        width: widthPercentageToDP('20%'),
        marginLeft: Platform.OS === 'ios' ? 9 : 10,

    },
    productTitle: {
        fontSize:20,
        fontFamily: 'LeagueSpartan.semibold',
        color: 'black',
        marginVertical: 5,
        marginLeft: Platform.OS === 'ios' ? 9 : 10,
        width: widthPercentageToDP('20%'),
    },
});


export default ProductScreen;
