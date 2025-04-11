import { useState, useEffect } from 'react';
import axios from 'axios';
import resumePrompt from './resumeData';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const systemPrompt = {
    role: 'system',
    content: resumePrompt,
  };

  useEffect(() => {
    setMessages([systemPrompt]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...updatedMessages, botReply]);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  return (
    <section className="my-12 max-w-3xl mx-auto bg-black text-white p-6 rounded-xl shadow-lg border border-gray-700">
      <h4 className="text-2xl font-bold mb-4 text-center">Chat with Resume!</h4>

      <div className="h-64 overflow-y-auto mb-4 p-2 space-y-2 border border-gray-600 rounded">
        {messages.slice(1).map((msg, idx) => (
          <div key={idx} className="text-sm whitespace-pre-wrap text-white">
            <strong className={msg.role === 'user' ? 'text-blue-400' : 'text-white'}>
              {msg.role === 'user' ? 'You' : 'Assistant'}:
            </strong>
            <br />
            {msg.content}
          </div>
        ))}
      </div>

      <input
        className="bg-[#2e2e2e] text-white border border-gray-600 p-2 w-full rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Ask something..."
      />
    </section>
  );
}
