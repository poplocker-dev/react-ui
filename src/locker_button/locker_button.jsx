import React  from 'react'
import Button from 'src/button'
import cl     from 'classnames'

import './locker_button.css'

const label = (status, name) => {
  if (!status) return '...'

  switch(status) {
    case 'simple':
      return 'Set-up Smart Locker';
    case 'smart':
      return name;
    case 'pending':
      return name ? name : 'Pending';
    case 'invalid':
      return 'Invalid Smart Locker';
    case 'error':
    default:
      return 'Error';
  }
}

const classes = (status, onlyKey, creating) => ({
  'locker-button'              : true,
  [`locker-button--${status}`] : true,
  'locker-button--only-key'    : onlyKey,
  'locker-button--pending'     : creating
});

const badge = (locker) => {
  if (locker.onlyKey)
    return <div className="locker-badge">!</div>
  else
    return null;
}

const caption = (locker, creating) => {
  if (creating)
    return `Creating ${creating}`;
  else
    return label(locker.status, locker.name);
}

const LockerButton = (props) => {
  const { locker, creating, ...other } = props;
  if (locker == null)
    return '...'
  else
    return (
      <div className={cl(classes(locker.status, locker.onlyKey, creating))}>
        <Button kind="light" {...other}>
          { badge(locker) }
          { caption(locker, creating) }
        </Button>
      </div>
    );
}

export default LockerButton;
