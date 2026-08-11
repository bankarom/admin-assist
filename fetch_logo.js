const https = require('https');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
const dest = path.join(imgDir, 'logo.png');

const options = {
  hostname: 'adminassist.improxtech.com',
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'text/html'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for a logo image. usually has 'logo' in the filename or class.
    // WordPress custom logo typically has class="custom-logo"
    const regex = /<img[^>]+src="([^">]+logo[^">]*)"/gi;
    let match = regex.exec(data);
    
    if (!match) {
      // Try again looking for any img tag inside a header or brand
      const altRegex = /<img[^>]+src="([^">]+)"[^>]*alt="[^"]*Admin[^"]*"/gi;
      match = altRegex.exec(data);
    }
    
    if (!match) {
      // Just find the first image in the body that isn't an icon
      const fallback = /<img[^>]+src="([^">]+(png|jpg|jpeg))"/i;
      match = fallback.exec(data);
    }

    if (match) {
      let url = match[1];
      if (url.startsWith('/')) url = 'https://adminassist.improxtech.com' + url;
      else if (!url.startsWith('http')) url = 'https://adminassist.improxtech.com/' + url;

      console.log('Downloading logo from:', url);
      
      https.get(url, { headers: options.headers }, (imgRes) => {
        if (imgRes.statusCode === 200) {
          const file = fs.createWriteStream(dest);
          imgRes.pipe(file);
          console.log('Successfully saved logo.png');
        } else {
          console.log('Failed to download image, status:', imgRes.statusCode);
        }
      });
    } else {
      console.log('Could not find logo URL in HTML.');
    }
  });
});
