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
    speaker_twitter,
  } = quote;

  const {
    thumbnailContainer,
    headerContent,
    headerText,
  } = styles;

  const tweetQuote = () => {
    shareOnTwitter({
        'text': `"${description}" - @${speaker_twitter}`
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
        </View>
      </CardSection>
      <Button
        onPress={tweetQuote}
        title="Tweet"
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
    fontSize: 16,
    fontStyle: 'italic'
  }
});


export default Quote;
