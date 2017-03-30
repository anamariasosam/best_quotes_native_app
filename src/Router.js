import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Event from './components/Event';
import Home from './components/Home';
import Quotes from './components/QuotesList';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
    navigationBarStyle={styles.viewStyle}
    titleStyle={styles.textStyle}
  >
    <Scene key="home" component={Home} title="Events" initial />
    <Scene key="event" component={Event} title="Speakers"  />
    <Scene key="quotes" component={Quotes} title="Quotes"  />

  </Router>
);

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#262626',
    fontWeight: 'bold',
  },

  viewStyle: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0,
    height: 65,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
  }
};

export default RouterComponent;
