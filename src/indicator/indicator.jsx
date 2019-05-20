import React from 'react'
import Icon  from '../icon'

import './indicator.css'

const Indicator = ({ direction }) => (
  <div className={`indicator indicator--${direction}`}>
    <Icon glyph={direction == 'error' ? 'close' : direction == 'self' ? 'forward' : direction == 'up' ? 'arrow-up' : 'arrow' }/>
  </div>
);

export default Indicator;
