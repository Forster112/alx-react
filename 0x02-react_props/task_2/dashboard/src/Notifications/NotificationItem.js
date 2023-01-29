import React from 'react'

function NotificationItem ({ type, value, html}) {
  return (
    value ?
    <li data-notification-type={type}>
      {value}
    </li>
    :
    <li dangerouslySetInnerHTML={{ __html: html }}></li>
  )
};

export default NotificationItem;
