import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [tone, setTone] = useState('');
  const [textResponse, setTextResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/generate-blog', { text, tone });
      setTextResponse(response.data); // Store the generated text response in state
    } catch (error) {
      console.error(error);
    }
  };

  function isTechnicalWord(word) {
    // Implement your logic to determine if the word is technical
    // For example, you can check if the word matches a list of technical terms or has certain characteristics
    // Return true if the word is technical, false otherwise
  }

  return (
    <div>
      <div>
        <label htmlFor="text-input">Text:</label>
        <input
          type="text"
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tone-select">Tone:</label>
        <select
          id="tone-select"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="">Select a tone</option>
          <option value="Informative and Concise">Informative and Concise</option>
          <option value="Conversational and Friendly">Conversational and Friendly</option>
          <option value="Authoritative and Expert">Authoritative and Expert</option>
          <option value="Engaging and Interactive">Engaging and Interactive</option>
          <option value="Inspirational and Motivational">Inspirational and Motivational</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {textResponse && (
        <div className="card">
          {textResponse.split(' ').map((word, index) => (
            <span key={index} className={isTechnicalWord(word) ? 'technical' : ''}>
              {word}{' '}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
