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

const AuthorDetail = ({ author }) => {
  const {
    name,
    twitter,
    id,
    description,
  } = author;

  const {
    thumbnailStyle,
    thumbnailContainer,
    headerContent,
    headerText,
    authorImage,
  } = styles;

  const goToQuotes= () => Actions.quotes({ id });

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            source={require(`../images/author.png`)}
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
  authorImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default AuthorDetail;
