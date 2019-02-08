import React from 'react'
import cl    from 'classnames'
import Icon  from 'src/icon'

import 'css/colors.css'
import 'css/variables.css'
import './button.css'

const classes = ({ kind }) => ({
  'btn'             : true,
  'btn--alt'        : kind == 'alt',
  'btn--light'      : kind == 'light',
  'btn--reject'     : kind == 'reject'
});

const Button = (props) => (
  <button className={cl(classes(props))} {...props}>
    <div className="caption">
      { props.children }
    </div>
    <Icon glyph={props.icon}/>
  </button>
);

export default Button;
