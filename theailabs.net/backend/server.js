addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Handle /api/chat endpoint
  if (url.pathname === '/api/chat' && request.method === 'POST') {
    try {
      const requestBody = await request.json()
      const userMessage = requestBody.message
      console.log(`Received message: ${userMessage}`)

      // Logic to call Ollama or OpenAI would go here.
      // For now, we return a simple confirmation.
      const botReply = `[Worker]: I received your message: "${userMessage}". (Live AI connection pending)`

      return new Response(JSON.stringify({ reply: botReply }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      })
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400
      })
    }
  }

  // For any other requests, return a 404 or redirect, as static files are served by Pages
  return new Response('Not Found', { status: 404 })
}