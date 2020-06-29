import React from 'react';

const NoteContent = ({ expandBtn, text, trimmed, trimmedLength = 128 }) => {
  if (!text) {
    return null;
  }

  let content = text;
  if (trimmed && text.length > trimmedLength) {
    content = `${text.substring(0, trimmedLength)} ...`;
  }

  return (
    <>
      <p style={{ overflowWrap: 'break-word', maxWidth: '350px' }}>{content}</p>
      {expandBtn}
    </>
  );
};

export default NoteContent;
