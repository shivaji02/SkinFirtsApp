import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { StethIcon, FavIcon, SortBarIcon, SearchIcon } from '../../assets/svg/HomeScreensvg';
import { scale,verticalScale,widthPercentageToDP,heightPercentageToDP } from '../../utils/responsiveUtils';
import SearchBar from '../../components/SearchBar';
import { COLORS } from '../../theme/colors';
// const width = Dimensions.get('window').width;
const IconBar = () => {
    const handleDoc = (): void => {
        console.log("Doc press");
    };
    const handleFav = (): any =>{
        console.log("Fav press");
    }
    return (
        <View style={styles.container}>
            <View style={styles.iconbox}>
            <CustomIcon IconComponent={StethIcon} size={30} onPress={handleDoc} padding={5} text="Doctor"/>
            </View>
            <View style={styles.iconbox}>
            <CustomIcon IconComponent={FavIcon} size={30} onPress={handleFav} padding={5} text="Favourite"/>
            </View>
            <SearchBar
                leftIcon={SortBarIcon}
                leftIconStyle={styles.lefticon}
                leftIconSize={widthPercentageToDP(3)}
                rightIcon={SearchIcon}
                height={heightPercentageToDP(6)}
                width={widthPercentageToDP(27)}
                style={styles.searchbar}
                rightIconStyle={styles.lefticon}
                // onChange={(text) => console.log(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
        padding: 10,
    },
    iconbox:{
        height :verticalScale(50),
        width:scale(60),

    },
    searchbar:{
        borderRadius:30,
        backgroundColor: COLORS.primary[300],
        marginLeft:widthPercentageToDP(2),
        top:heightPercentageToDP(1),
        marginBottom:heightPercentageToDP(-3),
        marginRight:widthPercentageToDP(2),
    },
    lefticon:{
        marginLeft:widthPercentageToDP(-1),
        marginRight:widthPercentageToDP(-1),
        top:heightPercentageToDP(0.5),
    },
});

export default IconBar;
