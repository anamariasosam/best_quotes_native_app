import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import AuthorDetail from './AuthorDetail';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
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
          .then(res => this.setState({ authors: res.authors }));
        }
      )
      .catch(err => console.log('Fetch Error :-S', err));
  }

  renderAuthors() {
    return this.state.authors
      .map(author => <AuthorDetail key={author.id} author={author} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderAuthors() }
      </ScrollView>
    );
  }
}

export default Event;
