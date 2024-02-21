import React from 'react';

function readLength(min) {
  let readLength = '';
  if (min < 30) {
    for (let i = 0; i < Math.ceil(min / 5); i++) {
      readLength += '☕️';
    }
  } else {
    for (let i = 0; i < Math.ceil(min / 10); i++) {
      readLength += '🍱';
    }
  }
  return `${readLength} ${min}`;
}

function Article({ date = 'January 1, 1970', key, minutes, preview, title }) {
  return (
    <article key={key}>
      <h3>{title}</h3>
      <small>
        {date} · {readLength(minutes)} minute read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
