import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { StethIcon, FavIcon, SortBarIcon, SearchIcon } from '../../assets/svg/HomeScreensvg';
import { COLORS } from '../../theme/colors';

const IconBar = () => {
    return (
        <View style={styles.container}>
            <CustomIcon IconComponent={StethIcon} size={30} backgroundColor={COLORS.primary[100]} iconColor={COLORS.white} padding={5} />
            <CustomIcon IconComponent={FavIcon} size={30} backgroundColor={COLORS.common.backdrop} iconColor={COLORS.white} padding={5} />
            <CustomIcon IconComponent={SortBarIcon} size={30} backgroundColor={COLORS.greyscale[100]} iconColor={COLORS.white} padding={5} />
            <CustomIcon IconComponent={SearchIcon} size={30} backgroundColor={COLORS.common.backdrop} iconColor={COLORS.white} padding={5} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
});

export default IconBar;
