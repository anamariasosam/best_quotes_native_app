import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Linking,
} from 'react-native';
import {
  shareOnTwitter,
} from 'react-native-social-share';


import Card from './Card';
import CardSection from './CardSection';

const Quote = ({ quote }) => {
  const {
    description,
  } = quote;

  const {
    thumbnailStyle,
    thumbnailContainer,
    headerContent,
    headerText,
    authorImage,
  } = styles;

  const tweetQuote = () => {
    shareOnTwitter({
        'text':'Global democratized marketplace for art',
        'link':'https://artboost.com/',
        'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
      },
      (results) => {
        console.log(results);
      }
    );
  };

  return (
    <Card>
      <CardSection>
        <View style={headerContent}>
          <Text style={headerText}>{ description }</Text>
            <Button
              onPress={tweetQuote}
              title="Tweet"
            />
        </View>

      </CardSection>
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


export default Quote;
