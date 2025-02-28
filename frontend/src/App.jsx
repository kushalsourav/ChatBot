import { useState } from "react";
import axios from "axios";
import "./App.css"
function App() {
  const [question, setQuestion] = useState("");
  const [platform, setPlatform] = useState("segment");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    const { data } = await axios.post("http://localhost:5000/api/chat", {
      question,
      platform,
    });
    setResponse(data.answer);
  };

  return (
    <div className="container">
      <div className="chat-box">
        <select onChange={(e) => setPlatform(e.target.value)} className="dropdown">
          <option value="segment">Segment</option>
          <option value="mparticle">mParticle</option>
          <option value="lytics">Lytics</option>
          <option value="zeotap">Zeotap</option>
        </select>
        <textarea
          placeholder="Ask your question..."
          className="textarea"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAsk} className="button">
          Ask
        </button>
        <div className="response-box">
          {response && <p>{response}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
