import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import styles from './styles';
import {globalStyles} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

  componentDidUpdate(prevProps) {
    const {filters} = this.props;

    if (prevProps.filters !== filters) {
      const newFiltersList = filters.map(item => ({...item, active: true}));
      this.setState({
        filtersList: newFiltersList,
      });
    }
  }

  onPressFilter = name => {
    const {filtersList} = this.state;

    const newFL = filtersList.map(item =>
      name === item.strCategory ? {...item, active: !item.active} : {...item},
    );

    this.setState({
      filtersList: newFL,
    });
  };

  handlePressSubmit = () => {
    const {filtersList} = this.state;
    const {getCoctailesByCategories, navigation} = this.props;

    const filters = filtersList
      .map(item => (item.active ? item.strCategory : null))
      .filter(item => item !== null);

    getCoctailesByCategories(filters);

    navigation.goBack();
  };

  render() {
    const {loading} = this.props;

    const {filtersList} = this.state;

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
            data={filtersList}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.categoryItemContainer}
                onPress={() => this.onPressFilter(item.strCategory)}>
                <Text style={globalStyles.titleStyle}>{item.strCategory}</Text>
                {item.active ? (
                  <Icon name="check" type="material-community" />
                ) : null}
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Button
            title="APPLY"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainer}
            onPress={this.handlePressSubmit}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Filters;
