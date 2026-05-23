import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * BasicFunctionality Component
 * Feature: basic_functionality
 * Refactored for better performance and maintainability
 */
const BasicFunctionality = ({ initialState = null, onAction = null }) => {
  const [state, setState] = useState(initialState);

  const handleClick = useCallback(() => {
    setState('active');
    onAction?.('clicked');
  }, [onAction]);

  return (
    <div
      data-testid="basic_functionality-container"
      className="basic_functionality-component"
      aria-label="Basic Functionality"
    >
      <h2>Basic Functionality</h2>
      <button
        onClick={handleClick}
        role="button"
        aria-pressed={state === 'active'}
      >
        Action
      </button>
    </div>
  );
};

BasicFunctionality.propTypes = {
  initialState: PropTypes.string,
  onAction: PropTypes.func,
};

export default React.memo(BasicFunctionality);
