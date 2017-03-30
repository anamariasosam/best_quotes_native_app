import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import Quote from './Quote';

class QuotesList extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }

  componentWillMount() {
    fetch(`http://localhost:3000/v1/authors/${this.props.id}`)
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => {
            this.setState({ quotes: res.quotes });
            console.log(`🦄🦄🦄  ${res.quotes}`);
          });
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderQuotes() {
    return this.state.quotes
      .map(quote => <Quote key={quote.id} quote={quote} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderQuotes() }
      </ScrollView>
    );
  }
}

export default QuotesList;
