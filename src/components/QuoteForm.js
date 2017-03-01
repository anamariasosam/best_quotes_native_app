import React, { Component } from 'react';
import {
  Button, TextInput, View, Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import request from 'axios';


import Quote from './Quote';

class QuoteForm extends Component {
  constructor(props) {
    super();

    this.state = {
      quote: '',
      speaker: props.speaker
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const description = this.state.quote;
    const speaker_id = this.state.speaker;

    request
    .post('http://localhost:3000/v1/quotes/',
    {
      description,
      speaker_id
    })
    .then(function () {
      Actions.quotes({ id: speaker_id});
    })
    .catch(function (error) {
      console.log(`🍪 ${error}`);
    });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Write the quote of the speaker here"
          onChangeText={(quote) => this.setState({quote})}
        />
        <Button
          onPress={this.handleSubmit}
          title="Send"
        />
      </View>
    );
  }
}

export default QuoteForm;
