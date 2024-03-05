// pages/api/coinmarketcap.js

// Export the API route handler function
module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    // Preflight request
    res.status(200).end();
    return;
  }

  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=21&convert=USD";
  const apiKey = process.env.CONMARKET_API;

  try {
    const response = await fetch(url, {
      headers: {
        "X-CMC_PRO_API_KEY": "552675b6-f913-4a97-adcc-bdbf6ccd37d9",
        "Content-Type": "application/json",
      },
    });
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
