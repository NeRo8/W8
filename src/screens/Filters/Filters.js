import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Filters</Text>
      </SafeAreaView>
    );
  }
}

export default Filters;
