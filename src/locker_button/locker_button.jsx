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

const classes = (status, creating, onlyKey, requests) => ({
  'locker-button'              : true,
  'locker-button--pending'     : creating,
  [`locker-button--${status}`] : true,
  'locker-button--only-key'    : onlyKey,
  'locker-button--requests'    : requests,
});

const badge = (onlyKey, requests) => {
  if (onlyKey)
    return <div className="locker-badge">!</div>
  else if (requests)
    return <div className="locker-badge">{requests}</div>
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
  const requests = locker.requests.length;
  const onlyKey = locker.keys.length < 2 && !requests;

  if (locker == null)
    return null
  else
    return (
      <div className={cl(classes(locker.status, creating, onlyKey, requests))}>
        <Button kind="light" {...other}>
          { badge(onlyKey, requests) }
          { caption(locker, creating) }
        </Button>
      </div>
    );
}

export default LockerButton;
