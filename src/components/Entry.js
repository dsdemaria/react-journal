import React from 'react';

const style = {
  paddingBottom: '1em'
}

const Entry = ({ title, href, description }) => (
  <div style={style}>
    <dt> <a href={href}>{title}</a> </dt>
    <dd>{description}</dd>
  </div>
)

export default Entry
