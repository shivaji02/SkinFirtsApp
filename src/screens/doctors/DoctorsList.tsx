import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import HeadBack from '../../components/Goback';
import { doctorsdata } from '../../data/doctors';
import CustomIcon from '../../components/CustomIcon';
import CustomImage from '../../components/CustomImage';
import {actFav,
        acta2z,
        actfm,
        actm,
        actstar,
        inactFav,
        inacta2z,
        inactfm,
        inactm,
        inactstar,} from '../../assets/png/doctors/index'

import { NavigationProp } from '@react-navigation/native';
import { COLORS } from '../../theme/colors';

interface DoctorsListProps {
    navigation: NavigationProp<any>;
}

const getActiveIcon = (filterType) => {
    switch (filterType) {
        case 'A-Z': return acta2z;
        case 'Star' : return actstar;
        case 'Male': return actm;
        case 'Female': return actfm;
        case 'Fav': return actFav;
        default: return acta2z;
    }
};

const getInactiveIcon = (filterType) => {
    switch (filterType) {
        case 'A-Z': return inacta2z;
        case 'Star' : return inactstar;
        case 'Male': return inactm;
        case 'Female': return inactfm;
        case 'Fav': return inactFav;
        default: return inacta2z;
    }
};

export const DoctorsList = ({ navigation }: DoctorsListProps) => {

    const [doctors, setDoctors] = useState(doctorsdata);
    const [filter, setFilter] = useState('All');
    const [isAsc,setIsAsc] = useState(true);
    // console.log(doctorsdata, 'DoctorList.tsx rendered ');
    const filteredDoctors = doctors
    .filter((doctor) => {
        if (filter === 'A-Z') {return true;}
        if(filter === 'Star') {return doctor.rating === 5;}
        if (filter === 'Male') {return doctor.gender === 'Male';}
        if (filter === 'Female') {return doctor.gender === 'Female';}
        if (filter === 'Fav') {return doctor.isFav;}
        return true;
    }).sort((a,b) =>{
        if(filter === 'A-Z'){
            const nameA =  a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return isAsc  ? nameA.localeCompare(nameB):nameB.localeCompare(nameA);
        }
        return 0;
    });

    const toggleFavorite = (id) => {
        const updateDoctors = doctors.map((doctor) => 
            doctor.id === id ? { ...doctor, isFav: !doctor.isFav } : doctor
        );
        setDoctors(updateDoctors);
    };

    const handleAZSort =()=>{
        setFilter('A-Z');
        setIsAsc(!isAsc);
    };

    // const renderFilterIcon = (filterType)=> {
    //     const Icon = filter === filterType ? getActiveIcon(filterType): getInactiveIcon(filterType);
    //     return <Icon width={24} height={24} fill={filter=== filterType ? COLORS.primary.main : COLORS.common.modal}/>;
    // };

    return (
        <View style={styles.container}>
            <HeadBack title={'Doctor List'} showIcon={false} />

            {/* filterbar */}
            <View style={styles.filterBar}>
                {['All','Star','Fav','Female','Male'].map((filterType) =>(
                    <CustomIcon 
                        key={filterType}
                        IconComponent={
                            filter === filterType ?  
                            getInactiveIcon(filterType) : 
                            getActiveIcon(filterType)                     }
                            size={24}
                            onPress={()=>setFilter(filterType)}
                            backgroundColor={filterType ? COLORS.primary.main : COLORS.primary[300]}
                            iconColor={filter === 'A-Z' ? COLORS.common.white :  COLORS.primary.main}
                            />
))}
<CustomIcon
    IconComponent={isAsc ? acta2z : inacta2z}
    size={24}
    onPress={handleAZSort}
    text={isAsc ? 'A-Z' : 'Z-A'}
    backgroundColor={filter  === 'A-Z' ? COLORS.primary.main : COLORS.common.white}
    iconColor= {filter=== 'A-Z' ? COLORS.common.white : COLORS.primary[300] }
    />
            </View>
                <FlatList
                    data={filteredDoctors}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.docCard}
                            onPress={() => navigation.navigate('DoctorInfo', { doctor: item })}
                        >
                            <CustomImage source={item.profileImage} style={styles.proImg}  borderRadius={30}/>
                            <Text>{item.name}</Text>
                            <Text>{item.specialty}</Text>
                            <Text>*{item.rating} | {item.reviews}</Text>
                            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                                <Text>{item.isFav ? '❤️' : '🤍'}</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#f8f8f8',
    },
    filterBar:{
        flexDirection:'row',
        gap:10,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    activeFilterText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 5,
    },
    inactiveFilterText: {
        fontSize: 16,
        color: '#ccc',
        marginLeft: 5,},
    icon: {
        width: 24,
        height: 24,
    },
    docCard: {
        fontSize: 18,
        marginVertical: 10,
        color: '#333',
    },
    proImg: {

    },
});

export default DoctorsList;
