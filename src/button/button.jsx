import React from 'react'
import cl    from 'classnames'
import Icon  from 'src/icon'

import 'css/colors.css'
import './button.css'

const classes = (type) => ({
  'btn': true,
  'btn--alt': type == 'alt',
  'btn--reject': type == 'reject'
});

const Button = (props) => (
  <button className={cl(classes(props.type))} {...props}>
    <div className="caption">
      { props.children }
    </div>
    <Icon glyph={props.icon}/>
  </button>
);

export default Button;
