export async function askQuestion(question: string): Promise<Answer> {
  const response = await fetch('http://127.0.0.1:8000/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
    body: JSON.stringify({ question }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to get answer');
  }
  
  return response.json();
}