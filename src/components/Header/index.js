import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

/** const Header = () => (
  <header className="menu">
    <nav>
      <a className="menu-link menu-link--selected" href="">Accueil</a>
      <a className="menu-link" href="">React</a>
      <a className="menu-link" href="">Angular</a>
      <button className="menu-btn" type="button">Activer le mode zen</button>
    </nav>
  </header>
); */

const Header = ({ categories }) => (
  <header className="menu">
    <nav>
      {categories.map((category) => (
        <Header label={category.label} />
      ))}
      <button className="menu-btn" type="button">Activer le mode zen</button>
    </nav>
  </header>
);

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  label: PropTypes.string.isRequired,
};
Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Header;
