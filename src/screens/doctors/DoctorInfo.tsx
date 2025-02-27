import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomImage from '../../components/CustomImage';
import { RouteProp } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/responsiveUtils';

export type DoctorInfoRouteProp = RouteProp<{ DoctorInfo: { doctor: { profileImage: string; name: string; specialty: string; rating: number; reviews: string; bio?: string; hightlights?: string; } } }, 'DoctorInfo'>;

const DoctorInfo = ({ route }: { route: DoctorInfoRouteProp }) => {
    const { doctor } = route.params;

    // const handleSearch = ()=>{
    //     console.log('search Icon Pressed');
    // };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profCon}>
                <View style={styles.doc1}>
                    <CustomImage source={doctor.profileImage} width={widthPercentageToDP(15)} height={heightPercentageToDP(15)} />
                    <Text >{doctor.name}</Text>
                    <Text>{doctor.specialty}</Text>

                </View>

                <View style={styles.rateCon}>
                    <Text>*{doctor.rating}</Text>
                    <Text>{doctor.reviews}</Text>
                </View>
            </View>
            <Text>About</Text>
            <Text>{doctor.bio || 'No additional information available right now'}</Text>
            <View>

                <View style={styles.rateCon}>
                    <Text>Highlights</Text>
                    <Text>{doctor.hightlights || 'nothing much than treating sick people to bring joy back'}</Text>

                </View>

            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headRight: {
        flexDirection: 'row',
    },
    rateCon: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,

    },
    doc1: {
        alignContent: 'flex-start',
    },
    profCon: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 10,

    },
});

export default DoctorInfo;
