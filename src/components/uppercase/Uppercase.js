import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
} from '@material-ui/core';

import {uppercase} from '../..';

function Uppercase ({
  text,
}) {
  let component = <></>;
  if (text) {
    let _text = uppercase(text);
    component = (
      <Typography>
        {_text}
      </Typography>
    );
  }
  return (
    <>
      {component}
    </>
  )
}

Uppercase.propTypes = {
  /** This will be uppercased */
  text: PropTypes.string.isRequired,
}

export default Uppercase;