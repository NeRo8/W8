import Filters from './Filters';

import {connect} from 'react-redux';
import {coctailesActions} from '../../redux/coctailes';

const mapStateToProps = state => {
  return {
    filters: state.coctailes.filters,
    loading: state.coctailes.loading,
    activeFilters: state.coctailes.activeFilters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilters: () => dispatch(coctailesActions.getFilters()),
    getCoctailesByCategories: filters =>
      dispatch(coctailesActions.getCoctailesByFilters(filters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
