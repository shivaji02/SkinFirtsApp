import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';
import { useProductStore } from '../../store/productStore';
import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../../service/productapi';
import  {RootStackParamList} from '../../navigation/RootStackParamList';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/responsiveUtils';

const ProductScreen = () => {
const navigation = useNavigation<RootStackParamList>();
const { totalProduct, scrolledProduct, setTotalProduct, setScrolledProduct } = useProductStore();
const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const handleScroll = (event: any) => {
        if (!products) { return 'No products'; }
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const scrolled = Math.floor((contentOffset.y / (contentSize.height - layoutMeasurement.height)) * totalProduct);
        setScrolledProduct(scrolled);
    };

    const HandleProductDetail = (item: any) => {
        // console.log('Product Detail>>>>>?', item.id);
        navigation.navigate('ProductDetail',{productId:item.id});
    };

    useEffect(() => {
        if (products) { setTotalProduct(products.length);}
    }, [products, setTotalProduct]);

    const renderProducts = ({ item }: any) => {
        return (
            <Pressable style={styles.productContainer} onPress={() => HandleProductDetail(item)}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
                {/* <Text style={styles.productDesc}>{item.description}</Text> */}
                <Text style={styles.productPrice}>{item.price}</Text>
            </Pressable>);
    };

    if (isLoading) {
        return <Text style={styles.Loading}>Loading...</Text>;
    }
    if (error) {
        return <Text style={styles.error}>Error please try again, {error.toString()}</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={styles.scrollTracker} pointerEvents="none">
                <Text style={styles.scrollText}>
                    {totalProduct - scrolledProduct}/{totalProduct}
                </Text>
            </View>

            <FlatList
                data={products}
                //keyExtractor={(item, index) => `${item.id}-${index}`}
                keyExtractor={(item)=>item.id}
                renderItem={renderProducts}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                numColumns={2}
                contentContainerStyle={styles.productMContainer}
                flashScrollIndicators={true}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#teal',
        // width: widthPercentageToDP('50%'),

    },
    error: { textAlign: 'center', color: 'red', fontSize: 20 },
    Loading: { textAlign: 'center', color: 'green', fontSize: 20 },

    scrollTracker: {
       width: widthPercentageToDP('15%'),
       position:'absolute',
       alignContent:'stretch',
         bottom: 70,
        right: -20,
        // backgroundColor: 'blue',
    },
    scrollText: {
        fontSize: 20,
        backgroundColor: 'black',
        color: 'red',
        borderRadius: 50,
        width: widthPercentageToDP('7%'),
        height: heightPercentageToDP('5%'),
        textAlign: 'center',
        marginInline: 10,
        padding: 5,
    },
    productImage: {
        width: widthPercentageToDP('20%'),
        height: heightPercentageToDP('10%'),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    productContainer: {
        justifyContent: 'space-between',
        borderBlockColor: 'red',
        borderWidth: 1,
        padding: 10,
        overflow:'hidden',
        left: Platform.OS === 'ios' ? -5 : 0,
        right: 0,
        margin: 5,


    },
    productMContainer: {
       // justifyContent: 'space-between',
      //  width: widthPercentageToDP('50%'),
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
        lineHeight: 20,
        overflow: 'hidden',
    },
});


export default ProductScreen;
