import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Quote from './Quote';

class QuotesList extends Component {
  constructor(props) {
    super();
    this.state = {
      quotes: [],
      speaker: props.id,
    };

    this.postNewQuote = this.postNewQuote.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:3000/v1/speakers/${this.props.id}`)
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          response
          .json()
          .then(res => {
            this.setState({ quotes: res.quotes });
          });
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderQuotes() {
    return this.state.quotes
      .map(quote => <Quote key={quote.id} quote={quote} />);
  }

   postNewQuote() {
     Actions.postQuote({speaker: this.state.speaker});
   }

  render() {
    return (
      <ScrollView>
        { this.renderQuotes() }
        <Button
          onPress={this.postNewQuote}
          title="New Quote"
        />
      </ScrollView>
    );
  }
}

export default QuotesList;
