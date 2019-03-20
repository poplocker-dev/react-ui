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
  }
}

const classes = (status, onlyKey) => ({
  'locker-button'              : true,
  [`locker-button--${status}`] : true,
  'locker-button--only-key'    : onlyKey
});

const LockerButton = (props) => {
  const { locker } = props;
  if (locker == null)
    return '...'
  else
    return (
      <div className={cl(classes(locker.status, locker.onlyKey))}>
        <Button {...props}>{ label(locker.status, locker.name) }</Button>
      </div>
    );
}

export default LockerButton;
