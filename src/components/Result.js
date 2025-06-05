import React from 'react';

function Result({ data }) {
  const { word, phonetics, meanings } = data;

  return (
    <div className="result">
      <h2>{word}</h2>
      {phonetics[0]?.text && <p><strong>Phonetic:</strong> {phonetics[0].text}</p>}
      {phonetics[0]?.audio && (
        <audio controls>
          <source src={phonetics[0].audio} type="audio/mpeg" />
        </audio>
      )}

      {meanings.map((meaning, index) => (
        <div key={index}>
          <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
          {meaning.definitions.map((def, i) => (
            <div key={i}>
              <p><strong>Definition:</strong> {def.definition}</p>
              {def.example && <p><em>Example:</em> {def.example}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Result;
