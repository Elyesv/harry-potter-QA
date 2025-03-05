import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  disabled: boolean;
}

export function QuestionInput({ onSubmit, disabled }: QuestionInputProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    if (question.trim() && !disabled) {
      onSubmit(question.trim());
      setQuestion('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto p-4">
        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about Harry Potter..."
            className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-12 focus:border-violet-400 focus:ring focus:ring-violet-300 focus:ring-opacity-50 disabled:opacity-50 resize-none"
            rows={1}
            disabled={disabled}
          />
          <button
            onClick={handleSubmit}
            disabled={disabled || !question.trim()}
            className="absolute right-2 bottom-2.5 p-1.5 text-gray-500 hover:text-violet-600 disabled:opacity-50 disabled:hover:text-gray-500"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          Press Enter to send your question
        </p>
      </div>
    </div>
  );
}