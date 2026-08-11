const https = require('https');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images', 'logos');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const options = {
  hostname: 'adminassist.improxtech.com',
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'text/html,application/xhtml+xml,application/xml'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // Extract img src
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(data)) !== null) {
      if (match[1].match(/(rdn|mbsi|clear|resolvion|idicore|ibeam|wombat|webtracker)/i)) {
        urls.push(match[1]);
      }
    }
    
    console.log(`Found ${urls.length} matching logos.`);
    
    urls.forEach(url => {
      if (url.startsWith('/')) {
        url = 'https://adminassist.improxtech.com' + url;
      } else if (!url.startsWith('http')) {
        url = 'https://adminassist.improxtech.com/' + url;
      }
      
      const filename = path.basename(new URL(url).pathname);
      const dest = path.join(imgDir, filename);
      https.get(url, { headers: options.headers }, (imgRes) => {
        if (imgRes.statusCode === 200) {
          const file = fs.createWriteStream(dest);
          imgRes.pipe(file);
          console.log(`Saved ${filename}`);
        } else {
          console.log(`Failed ${filename}: ${imgRes.statusCode}`);
        }
      });
    });
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
