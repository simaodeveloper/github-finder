import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url }}) => {

  return (
    <div>
      <img src={avatar_url} style={{ width: '60px', display: 'block', margin: 'auto' }} alt=""/>
      <p>{ login }</p>

      <a href={html_url}>More</a>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
