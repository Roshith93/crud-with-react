import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Information extends Component {
  render() {
    const { title, details, changeText, justAlert } = this.props;
    return (
      <div>
        <h2>Title : {title}</h2>
        <p>Details : {details}</p>
        <p onClick={changeText}>click here to change title</p>
        <p onMouseEnter={justAlert}>on mouse reaches</p>
      </div>
    );
  }
}
const defaultProps = {
    name : "Roshith Radhakrishnan"
}
Information.propTypes = {
    title : PropTypes.string.isRequired,
    changeText : PropTypes.func
}
export default Information;
