import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <span className={ icon }></span> { title }
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fa fa-github",
  title: "Github Finder"
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
