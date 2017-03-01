import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,

} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

const EventDetail = ({ event }) => {
  const {
    id,
    name,
    city,
    country,
    image,
  } = event;

  const {
    headerContent,
    headerContainer,
    headerImage,
    thumbnailContainer,
    headerText,
    thumbnailStyle,
  } = styles;

  const goToEvent = () => Actions.event({id});

  return (
    <TouchableOpacity onPress={goToEvent}>
      <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image
              source={{ uri: image, cache: 'only-if-cached' }}
              style={thumbnailStyle}

            />
          </View>
          <View style={headerContent}>
            <Text style={headerText}>{ name }</Text>
            <Text>{ city } - { country }</Text>
          </View>
        </CardSection>
      </ Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 55,
    width: 55
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
});


export default EventDetail;
