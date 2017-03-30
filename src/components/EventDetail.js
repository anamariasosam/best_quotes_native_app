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
    country
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
              source={require(`../images/event.png`)}
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
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  productImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default EventDetail;
