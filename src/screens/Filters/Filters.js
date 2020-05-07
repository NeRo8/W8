import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';
import {globalStyles} from '../../constants';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersList: [],
    };
  }

  componentDidMount() {
    const {getFilters} = this.props;

    getFilters();
  }

  static getDerivedStateFromProps(props, state) {
    const redFilters = props.filters;
    const redActiveFilters = props.activeFilters;

    var filtersList = [];

    redFilters.forEach(item => {
      filtersList.forEach(aItem => {
        console.log(item, aItem);
        if (item.strCategory === aItem) {
          filtersList.push({...item, active: true});
        }
      });
    });

    console.log(filtersList);
    return null;
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
        <View style={globalStyles.blockContainer}>
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

          <Button
            title="APPLY"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Filters;
