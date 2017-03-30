import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import EventDetail from './EventDetail';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/v1/events')
      .then(
        response => {
          if (response.status !== 200) {
            console.log(`like there was a problem. Status Code:${response.status}`);
            return;
          }
          // Examine the text in the response
          response
          .json()
          .then(res => this.setState({ events: res }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderEvents() {
    return this.state.events
      .map(event => <EventDetail key={event.id} event={event} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderEvents() }
      </ScrollView>
    );
  }
}

export default Home;
