import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import Coctaile from '../../components/Coctaile';

import styles from './styles';
import {globalStyles} from '../../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {getAllCoctailes} = this.props;
    getAllCoctailes();
  }

  render() {
    const {loading, coctailes} = this.props;

    if (loading) {
      return (
        <SafeAreaView>
          <ActivityIndicator size={'small'} color="balack" />
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={globalStyles.sfContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={coctailes}
          renderItem={({item}) => <Coctaile item={item} />}
          keyExtractor={item => item.idDrink}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
