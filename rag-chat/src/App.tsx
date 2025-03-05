import React, { useState } from 'react';
import { MessageList } from './components/MessageList';
import { QuestionInput } from './components/QuestionInput';
import { askQuestion } from './api';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (question: string) => {
    const questionMessage: Message = {
      id: Date.now().toString(),
      type: 'question',
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, questionMessage]);
    setIsLoading(true);

    try {
      const response = await askQuestion(question);
      const answerMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'answer',
        content: response.response,
        sources: response.sources,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, answerMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'answer',
        content: 'Sorry, I encountered an error while trying to answer your question. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto py-4 px-4">
          <h1 className="text-xl font-semibold text-gray-800">Harry Potter Q&A</h1>
        </div>
      </header>

      <MessageList messages={messages} />
      
      <QuestionInput onSubmit={handleSubmit} disabled={isLoading} />
    </div>
  );
}

export default App;