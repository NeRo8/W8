import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import styles from './styles';
import {globalStyles} from '../../constants';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {getFilters} = this.props;

    getFilters();
  }

  render() {
    const {loading, filters} = this.props;

    if (loading) {
      return (
        <SafeAreaView style={globalStyles.sfContainer}>
          <ActivityIndicator size={'large'} color="black" />
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={globalStyles.sfContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filters}
          renderItem={({item}) => (
            <View style={styles.categoryItemContainer}>
              <Text style={globalStyles.titleStyle}>{item.strCategory}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Filters;
