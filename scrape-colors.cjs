const https = require('https');

https.get('https://www.itcindia.org/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const hexRegex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g;
    const matches = data.match(hexRegex);
    if (matches) {
      const counts = {};
      matches.forEach(m => {
        const color = m.toLowerCase();
        counts[color] = (counts[color] || 0) + 1;
      });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      console.log('Top colors:', sorted.slice(0, 10));
    } else {
      console.log('No colors found');
    }
  });
}).on('error', err => console.log('Error:', err.message));
