import React from 'react';

const centerStyle = {
  margin: '0 auto'
}

const Week = ({ entries, title }) => {
  const weekEntries = entries.map(
    (entry, idx) => {
      return (
        <div key={entry.title + idx}>
          <dt>
            <a href={entry.link}>{entry.title}</a>
          </dt>
          <dd>{entry.description}</dd>
        </div>
      )
    }
  );
  return (
    <div>
      <h2>{title}</h2>
      <dl style={centerStyle}>
        {weekEntries}
      </dl>
    </div>
  )
}

export default Week
