import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { scale } from '../../utils/responsiveUtils';
import { isFontFamilyKey } from '../../theme/fontStyle';
import CustomIcon from '../../components/CustomIcon';
import { back } from '../../assets/svg/actions';
import { SearchIcon, SortBarIcon } from '../../assets/svg/HomeScreensvg';
import CustomImage from '../../components/CustomImage';
const DoctorInfo = ({route,navigation}) => {
   const {doctor} = route.params;

    const handleSearch =()=>{
        console.log("search Icon Pressed")
    }

//    React.useLayoutEffect(()=>{
//     navigation.setOptions({
//         headerTitleStyle: {
//           fontSize:scale(18),
//           isFontFamilyKey
//         },
//         headerLeft:() =>(
//             <CustomIcon IconComponent={back} size={24} onPress={()=>navigation.goBack()}/>
//         ),
//         headerRight:() =>(
//             <View style={styles.headRight}>
//             <CustomIcon IconComponent={SearchIcon} size={24} onPress={handleSearch} />
//             <CustomIcon IconComponent={SortBarIcon} size={24} onPress={handleSearch} />
//             </View>
//         ),
//     });
//    },[navigation,doctor]);
   return(
    <ScrollView  style={styles.container}>
        <View >
            <CustomImage source={doctor.profileImage} />
            <Text >{doctor.name}</Text>
            <Text>{doctor.specialty}</Text>
        </View>

            <View>
                <Text>*{doctor.rating}</Text>
                <Text>{doctor.reviews}</Text>
                
            </View>
            <Text>About</Text>
            <Text>{doctor.bio || "No additional information available right now"}</Text>
            <View>

        <View>
            <Text>Highlights</Text>
            <Text>{doctor.hightlights || 'nothing much than treating sick people to bring joy back'}</Text>

        </View>

            </View>


    </ScrollView>
   )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headRight:{
        flexDirection:'row',
    }
});

export default DoctorInfo;