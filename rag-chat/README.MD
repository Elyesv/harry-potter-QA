# Harry Potter Q&A Frontend

A React-based frontend application that allows users to ask questions about Harry Potter and receive answers from a local API. Built with React, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- A running instance of the Harry Potter Q&A API on `http://localhost:8000`

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── MessageList.tsx
│   └── QuestionInput.tsx
├── api.ts             # API integration
├── App.tsx            # Main application component
├── types.ts           # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Features

- Real-time chat interface
- Question and answer display
- Source references for answers
- Loading states
- Error handling
- Responsive design

## API Integration

The frontend communicates with a local API endpoint at `http://localhost:8000/ask`. Make sure the API server is running before using the application.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)