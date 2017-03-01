import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

const SpeakerDetail = ({ speaker }) => {
  const {
    name,
    twitter,
    id,
    description,
    image,
  } = speaker;

  const {
    thumbnailStyle,
    thumbnailContainer,
    headerContent,
    headerText,
  } = styles;

  const goToQuotes= () => Actions.quotes({ id });

  return (
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
          <Text>{ description }</Text>
        </View>
      </CardSection>
      <Button
        onPress={goToQuotes}
        title="Ver Frases"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 70
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 55,
    width: 55,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});


export default SpeakerDetail;
