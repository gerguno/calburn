import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getGPT(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
