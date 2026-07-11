import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductDetails } from '../../service/productapi';
import { useRoute } from '@react-navigation/native';
import CustomImage from '../../components/CustomImage';
import { widthPercentageToDP, heightPercentageToDP, scale } from '../../utils/responsiveUtils';
import Carousel from 'pinar';
import { FontStyle } from '../../theme/fontStyle';


const ProductDetail = () => {
    const route = useRoute();
    const { productId } = route.params as { productId: any };
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const { data: Detail, isLoading, error } = useQuery({
        queryKey: ['productDetail', productId],
        queryFn: () => fetchProductDetails(productId),
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error please try again, {error.toString()}</Text>;
    }

    const images = [
        { id: 1, uri: Detail.image },
        { id: 2, uri: Detail.image },
        { id: 3, uri: Detail.image },
        { id: 4, uri: Detail.image },
        { id: 5, uri: Detail.image },
    ];

    // const  renderItem = ({item} : {item:{uri:string}}) => {
    //     <TouchableOpacity onPress={()=>{
    //         setSelectedImage(item.uri);
    //         setModalVisible(true);
    //         console.log('Image Clicked',item.uri);
    //     }}>
    //         <CustomImage source={{uri:item.uri}} style={styles.productImage} />
    //     </TouchableOpacity>
    // };

    return (
        <ScrollView style={styles.container} >
            <Text style={styles.productTitle}>{Detail.title}</Text>
            {/* <CustomImage source={{ uri: Detail.image }} style={styles.productImage} /> */}
            <Carousel
                loop={true}
                height={heightPercentageToDP('40%')}
                autoplay={true}
                autoplayInterval={5000}>
                {images.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => {
                        setSelectedImage(item.uri);
                        setModalVisible(true);
                        // console.log('Image Clicked', item.uri);
                    }}>
                        <CustomImage source={{ uri: item.uri }} style={styles.productImage} />
                    </TouchableOpacity>
                ))}
            </Carousel>
            <Text style={[styles.productPrice, { fontSize: scale(20) }]}>${Detail.price}</Text>

            <Text style={styles.productDesc}>{Detail.description}</Text>

            <Modal animationType="slide"
                visible={modalVisible}
                transparent={true} >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeText}>Close</Text>
                        <CustomImage source={{ uri: selectedImage }} style={styles.modalImage} />
                    </TouchableOpacity>

                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImage: {
        width: widthPercentageToDP('40%'),
        height: heightPercentageToDP('40%'),
        borderRadius: scale(10),
        resizeMode: 'contain',
        overflow: 'hidden',
        margin: scale(10),
    },
    productTitle: {
        fontSize: scale(16),
        fontWeight: 'bold',
        marginTop: scale(5),
        fontFamily: FontStyle({ color: 'black', fontFamily: 'SemiBold' }).fontFamily,
        textAlign: 'left',
        margin: scale(10),},
    productDesc: {
        fontSize: scale(14),
        color: 'gray',
        lineHeight: scale(20),
        textAlign: 'justify',
        margin: scale(10),
    },
    productPrice: {
        fontSize: scale(16),
        fontWeight: 'bold',
        color: 'green',
        lineHeight: scale(20),
        textAlign: 'justify',
        margin: scale(10),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    modalImage: {
        width: widthPercentageToDP('70%'),  // 90% of the screen width
        height: heightPercentageToDP('60%'), // 90% of the screen height
        resizeMode: 'contain',
    },
    closeText: {
        color: 'red',
        fontSize: scale(20),
        top: scale(20),
        right: scale(20),
        position: 'absolute',
        backfaceVisibility: 'visible',
        backgroundColor: 'teal',
        padding: scale(5),
        borderRadius: scale(10),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});


export default ProductDetail;
