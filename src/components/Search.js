import React from 'react'
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import {setFilter} from '../redux/actions'

function Search(props) {
    return (
        <input
            onChange={e => props.setFilter(e.target.value)}
            value={props.visibilityFilter.filter}
            placeholder="Search"
        />
    )
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos,visibilityFilter };
};
export default connect(mapStateToProps, { setFilter })(Search);