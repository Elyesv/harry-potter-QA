export interface Question {
  question: string;
}

export interface Answer {
  response: string;
  sources: string[];
}

export interface Message {
  id: string;
  type: 'question' | 'answer';
  content: string;
  sources?: string[];
  timestamp: Date;
}