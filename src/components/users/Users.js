import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div>
      { users.map((user) => <UserItem key={user.id} user={user} />) }
    </div>
  )
}

UserItem.defaultProps = {
  users: []
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
