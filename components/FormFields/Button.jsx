import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, children }) => {
  return (
    <>
      <button type={type}>
        {children}
      </button>
    </>
  );
};
