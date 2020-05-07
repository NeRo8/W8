import React, {Component} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
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
    const {loading, coctailes, activeFilters} = this.props;

    if (loading) {
      return (
        <SafeAreaView style={globalStyles.sfContainer}>
          <ActivityIndicator size={'small'} color="balack" />
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={globalStyles.sfContainer}>
        <View style={globalStyles.blockContainer}>
          <Text style={globalStyles.headerTitle}>
            {activeFilters.toString()}
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={coctailes}
            renderItem={({item}) => <Coctaile item={item} />}
            keyExtractor={item => item.idDrink}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
