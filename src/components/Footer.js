import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters, deleteCompleted } from '../actions'
import { connect } from 'react-redux';

const Footer = ({ onDeleteCompleted }) => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <button data-test='delete-completed-button' onClick={onDeleteCompleted}>
      delete completed
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCompleted: () => dispatch(deleteCompleted())
  }
}

export default connect(null, mapDispatchToProps)(Footer);
