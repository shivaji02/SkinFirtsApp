import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import HeadBack from '../../components/Goback'
import doctorsdata from '../../data/doctors'

export const DoctorsList = ({navigation}) => {

    const [doctors,setDoctors ] = useState(doctorsdata);
    const [filter, setFilter] = useState('All');

    return (

        <View style={styles.container}>
            <HeadBack title={'Doctor List'} showIcon={false}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    doctorText: {
        fontSize: 18,
        marginVertical: 10,
        color: '#333',
    },
});

export default DoctorsList;