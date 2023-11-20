import { getGPT } from "./getGPT";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const message = req.body.message;
      const response = await getGPT(message);
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
