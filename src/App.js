import React, { useState } from 'react';
import Result from './components/Result';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const searchWord = async () => {
    if (!word.trim()) return;

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) throw new Error('Word not found');
      const data = await res.json();
      setResult(data[0]);
      setError('');
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>📖 Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={searchWord}>Search</button>

      {error && <p className="error">{error}</p>}
      {result && <Result data={result} />}
    </div>
  );
}

export default App;
