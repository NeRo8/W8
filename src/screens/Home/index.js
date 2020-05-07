import Home from './Home';

import {connect} from 'react-redux';

import {coctailesActions} from '../../redux/coctailes';

const mapStateToProps = state => {
  return {
    loading: state.coctailes.loading,
    coctailes: state.coctailes.coctailes,
    activeFilters: state.coctailes.activeFilters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCoctailes: () => {
      dispatch(coctailesActions.getAllCoctailes());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
