import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import SpeakerDetail from './SpeakerDetail';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      speakers: [],
    };
  }

  componentWillMount() {
    fetch(`http://localhost:3000/v1/events/${this.props.id}`)
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => this.setState({ speakers: res.speakers }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderSpeakers() {
    return this.state.speakers
      .map(speaker => <SpeakerDetail key={speaker.id} speaker={speaker} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderSpeakers() }
      </ScrollView>
    );
  }
}

export default Event;
