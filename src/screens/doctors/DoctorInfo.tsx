import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomImage from '../../components/CustomImage';
import { RouteProp } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/responsiveUtils';

export type DoctorInfoRouteProp = RouteProp<{
  DoctorInfo: {
    doctor: {
      profileImage: any;
      name: string;
      specialty: string;
      description: string;
      rating: number;
      reviews: string;
      bio?: string;
      hightlights?: string;
      location: string;
      coordinates: { latitude: number; longitude: number };
    };
  };
}, 'DoctorInfo'>;

const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#ebe3cd' }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#523735' }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f1e6' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#c9b2a6' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#dfd2ae' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#b9d3c2' }]
  }
];

const DoctorInfo = ({ route }: { route: DoctorInfoRouteProp }) => {
  const { doctor } = route.params;

  const [coordinates, setCoordinates] = useState<[number, number]>([
    doctor.coordinates.longitude,
    doctor.coordinates.latitude
  ]);

  const checkAvailability = (lat: number, lng: number) => {
    Alert.alert('Checking availability at:', `${lat}, ${lng}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Doctor Details */}
      <View style={styles.profCon}>
        <View style={styles.doc1}>
          <CustomImage
            source={doctor.profileImage}
            width={widthPercentageToDP(15)}
            height={heightPercentageToDP(15)}
          />
          <View style={styles.doc2}>
            <Text style={styles.nametxt}>{doctor.name}</Text>
            <Text style={styles.sptxt}>{doctor.specialty}</Text>
            <View style={styles.rateCon}>
              <Text>Rating: {doctor.rating}</Text>
              <Text>Reviews: {doctor.reviews}</Text>
              <Text>Location: {doctor.location}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* About Section */}
      <Text style={styles.sectionHeader}>About</Text>
      <Text>{doctor.description || 'No additional information available right now'}</Text>

      {/* Highlights Section */}
      <Text style={styles.sectionHeader}>Highlights</Text>
      <Text>{doctor.hightlights || 'Nothing much than treating sick people to bring joy back.'}</Text>

      {/* Map Section */}
      <Text style={styles.sectionHeader}>Location Map</Text>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: parseFloat(coordinates[1].toString()),
          longitude: parseFloat(coordinates[0].toString()),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
        customMapStyle={customMapStyle}
        onPress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          setCoordinates([longitude, latitude]);
          checkAvailability(latitude, longitude);
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: parseFloat(coordinates[1].toString()),
            longitude: parseFloat(coordinates[0].toString())
          }}
          onDragEnd={(e) => {
            const { latitude, longitude } = e.nativeEvent.coordinate;
            setCoordinates([longitude, latitude]);
            Alert.alert('Marker moved to:', `${latitude}, ${longitude}`);
          }}
          title={'Your location'}
          description={'This is a description of the marker'}
        >
          <View style={styles.markerContainer}>
            <View style={styles.markerBubble}>
              <Text style={styles.markerTitle}>{doctor.name}</Text>
              <Text style={styles.markerDesc}>{doctor.specialty}</Text>
            </View>
            <View style={styles.markerArrow} />
          </View>
        </Marker>
      </MapView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  profCon: {
    marginBottom: 10
  },
  doc1: {
    flexDirection: 'row'
  },
  doc2: {
    flexDirection: 'column',
    marginLeft: 10
  },
  nametxt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sptxt: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 10,
    color: 'gray'
  },
  rateCon: {
    gap: 6
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  mapStyle: {
    height: 400,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  markerBubble: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 3,
    width: 150
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
    marginTop: -1
  },
  markerTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  markerDesc: {
    fontSize: 12,
    color: 'gray'
  }
});

export default DoctorInfo;
