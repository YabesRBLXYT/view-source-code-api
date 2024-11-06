const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/view-source', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL diperlukan!' });
  }

  try {
    const response = await axios.get(url);
    res.set('Content-Type', 'text/html');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil kode sumber.' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
            
