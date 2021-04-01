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

const Header = ({ header, handleClick }) => (
  <header className="menu">
    <nav>
      <a className="menu-link menu-link--selected" href="">{header.label}</a>
      <a className="menu-link" href="">{header.label}</a>
      <a className="menu-link" href="">{header.label}</a>
      <button
        className="menu-btn"
        type="button"
        onclick={Autre}
        onChange={(event) => {
          handleClick(event.target.click, id);
        }}
      />
    </nav>
  </header>
);

Header.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Header;
