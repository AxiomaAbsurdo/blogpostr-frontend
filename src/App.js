import React, { useState } from "react";
import axios from "axios";

import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");
  const [textResponse, setTextResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/generate-blog", {
        text,
        tone,
      });
      setTextResponse(response.data); // Store the generated text response in state
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  function isTechnicalWord(word) {
    // Implement your logic to determine if the word is technical
    // For example, you can check if the word matches a list of technical terms or has certain characteristics
    // Return true if the word is technical, false otherwise
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Generate Blog Post</h1>
        <div>
          <label htmlFor="text-input" className="label">
            Topic:
          </label>
          <input
            type="text"
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label htmlFor="tone-select" className="label">
            Tone:
          </label>
          <select
            id="tone-select"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="select"
          >
            <option value="">Select a tone</option>
            <option value="Informative and Concise">
              Informative and Concise
            </option>
            <option value="Conversational and Friendly">
              Conversational and Friendly
            </option>
            <option value="Authoritative and Expert">
              Authoritative and Expert
            </option>
            <option value="Engaging and Interactive">
              Engaging and Interactive
            </option>
            <option value="Inspirational and Motivational">
              Inspirational and Motivational
            </option>
          </select>
        </div>
        <button onClick={handleSubmit} className="button">
          Submit
        </button>
      </div>
      {isLoading && <Spinner />}
      {textResponse && (
        <div className="card">
          <p>
            <blockquote>{textResponse}</blockquote>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
