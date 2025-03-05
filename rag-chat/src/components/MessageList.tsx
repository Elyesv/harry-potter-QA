import React from 'react';
import { BookOpen } from 'lucide-react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`py-8 ${
            message.type === 'question' ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                {message.type === 'question' ? (
                  <div className="bg-violet-100 w-full h-full rounded-full flex items-center justify-center">
                    <span className="text-violet-800 font-semibold">Y</span>
                  </div>
                ) : (
                  <div className="bg-emerald-100 w-full h-full rounded-full flex items-center justify-center">
                    <span className="text-emerald-800 font-semibold">HP</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 whitespace-pre-wrap">{message.content}</p>
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <BookOpen size={16} />
                      <span>Sources:</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {message.sources.map((source, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span>•</span>
                          <span>{source.split('/').pop()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}