import React from 'react';

const myStyle = {
  textAlign: 'center',
};

const Header = ({ title }) => (
  <div>
    <h1 style={myStyle}>{title}</h1>
    <hr />
  </div>
);

export default Header;

Header.propTypes = {
  title: React.PropTypes.string,
};
