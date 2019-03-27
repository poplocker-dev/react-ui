import React   from 'react'
import * as cl from 'classnames'
import './input.css'

const classes = (props) => ({
  'input-field': true,
  'input-field--invalid': props.error
});

const Input = (props) => {
  const { label, badge, badgeType, error, ...other } = props;

  return (
    <div className={ cl(classes(props)) }>
      <div className="label">{label}</div>
      <div className={`badge badge--${badgeType || 'info'}`}>{badge}</div>
      <input {...other}/>
      <div className="error">{error}</div>
    </div>
  );
}

export default Input;
