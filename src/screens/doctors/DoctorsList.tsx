import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import React, { useState } from 'react';
import { doctorsdata } from '../../data/doctors';
import CustomIcon from '../../components/CustomIcon';
import CustomImage from '../../components/CustomImage';
import { actFav, acta2z, actfm, actm, actstar, inactFav, inacta2z, inactfm, inactm, inactstar } from '../../assets/png/doctors/index'
import { NavigationProp } from '@react-navigation/native';
import { COLORS } from '../../theme/colors';
import { heightPercentageToDP, scale, widthPercentageToDP } from '../../utils/responsiveUtils';
import { DoctorT } from '../../types';
import { useRoute } from '@react-navigation/native';

interface DoctorsListProps {
    navigation: NavigationProp<any>;
}


interface IconProps {
    filterType: string;
}

const getActiveIcon = ({ filterType }: IconProps): any => {
    switch (filterType) {
        case 'A-Z': return acta2z;
        case 'Star': return actstar;
        case 'Male': return actm;
        case 'Female': return actfm;
        case 'Fav': return actFav;
        default: return acta2z;
    }
};

interface InactiveIconProps {
    filterType: string;
}

const getInactiveIcon = ({ filterType }: InactiveIconProps): any => {
    switch (filterType) {
        case 'A-Z': return inacta2z;
        case 'Star': return inactstar;
        case 'Male': return inactm;
        case 'Female': return inactfm;
        case 'Fav': return inactFav;
        default: return inacta2z;
    }
};

export const DoctorsList = ({ navigation}: DoctorsListProps) => {
    const  route=useRoute();
     const{filte}=route?.params;
 
    const [doctors, setDoctors] = useState(doctorsdata);
    const [filter, setFilter] = useState(filte);
    const [isAsc, setIsAsc] = useState(true);
    // console.log(doctorsdata, 'DoctorList.tsx rendered ');
    const filteredDoctors = doctors
        .filter((doctor) => {
            if (filter === 'A-Z') { return true; }
            if (filter === 'Star') { return doctor.rating === 5; }
            if (filter === 'Male') { return doctor.gender === 'Male'; }
            if (filter === 'Female') { return doctor.gender === 'Female'; }
            if (filter === 'Fav') { return doctor.isFav; }
            return true;
        }).sort((a, b) => {
            if (filter === 'A-Z') {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return isAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            }
            return 0;
        });


    const toggleFavorite = (id: number) => {
        const updateDoctors = doctors.map((doctor: DoctorT) =>
            doctor.id === id ? { ...doctor, isFav: !doctor.isFav } : doctor
        );
        setDoctors(updateDoctors);
    };

    const handleAZSort = () => {
        setFilter('A-Z');
        setIsAsc(!isAsc);
    };

    return (
        <View style={styles.container}>
            {/* <HeadBack title={'Doctor List'} showIcon={false} /> */}

            {/* filterbar */}
            <View style={styles.filterBar}>
                <CustomIcon
                    IconComponent={isAsc ? acta2z : inacta2z}
                    size={50}
                    style={StyleSheet.flatten([styles.a2z, styles.iconContainer])}
                    onPress={handleAZSort}
                    //text={isAsc ? 'A-Z' : 'Z-A'}
                    backgroundColor={filter === 'A-Z' ? COLORS.primary.main : COLORS.primary[300]}
                    iconColor={filter === 'A-Z' ? COLORS.common.black : COLORS.primary[300]}
                />
                {['Star', 'Fav', 'Female', 'Male'].map((filterType) => (
                    <CustomIcon
                        key={filterType}
                        IconComponent={
                            filter === filterType ?
                                getActiveIcon({ filterType }) :
                                getInactiveIcon({ filterType })
                        }
                        size={24}
                        onPress={() => setFilter(filterType)}
                        backgroundColor={filter === filterType ? COLORS.primary.main : COLORS.primary[300]}
                     iconColor={filter === filterType ? COLORS.common.black : COLORS.primary[300]}
                     style={styles.iconContainer}
                    />
                ))}
            </View>
            <FlatList
                data={filteredDoctors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.docCard}
                        onPress={() => navigation.navigate('DoctorInfo', { doctor: item })}
                    >
                        <CustomImage source={item.profileImage} style={styles.proImg}  borderRadius={30} />
                        <View style={styles.doctc}>
                            <Text>{item.name}</Text>
                            <Text>{item.specialty}</Text>
                            <Text>*{item.rating} | {item.reviews}</Text>
                            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                                <Text>{item.isFav ? '❤️' : '🤍'}</Text>
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    filterBar: {
        flexDirection: 'row',
        gap: 5,
    },
    a2z: {
        height: heightPercentageToDP(5),
        width: widthPercentageToDP(8),
        // padding:5,
        paddingTop:  scale(-35),
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    iconContainer:{
        alignItems:'center',
        height: heightPercentageToDP(5),
        padding:5,
    },
    activeFilterText: {
        fontSize: 16,
        marginLeft: 5,
    },
    inactiveFilterText: {
        fontSize: 16,
        marginLeft: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },
    docCard: {
        flexDirection: 'row',
        fontSize: 18,
        marginVertical: 10,
        gap: 20,
        backgroundColor: COLORS.primary[300],
        borderRadius: 10,
        height:heightPercentageToDP(15),
    },
    doctc: {
        justifyContent: 'center',
    },
    proImg: {
        justifyContent:'center',
        alignContent:'flex-start',
        alignItems:'center',
        height:heightPercentageToDP(10),
        width:widthPercentageToDP(10),
        paddingLeft: Platform.OS === 'android' ? 25 : 10,
        // padding:10,
    },
});

export default DoctorsList;
