export default async () => {
  const res = await fetch('https://api.adviceslip.com/advice')
  const text = await res.text()
  return new Response(text, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export const config = {
  path: '/api/advice',
}
