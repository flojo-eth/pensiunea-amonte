const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public/equinox');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const html = fs.readFileSync(path.join(__dirname, 'amonte_equinox_demo/amonte-equinox.html'), 'utf8');

// Find variable definitions like: --img-amonte: url("data:image/jpeg;base64,...");
const regex = /--img-([a-zA-Z0-9_-]+):\s*url\("data:image\/([a-zA-Z]+);base64,([^"]+)"\)/g;
let match;
while ((match = regex.exec(html)) !== null) {
  const name = match[1];
  const ext = match[2];
  const base64Data = match[3];

  const filePath = path.join(outDir, `${name}.${ext}`);
  fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
  console.log(`Extracted: public/equinox/${name}.${ext}`);
}

// Find other images if defined directly in background url()
const regexBg = /background:\s*url\("data:image\/([a-zA-Z]+);base64,([^"]+)"\)/g;
let count = 0;
while ((match = regexBg.exec(html)) !== null) {
  const ext = match[1];
  const base64Data = match[2];

  const filePath = path.join(outDir, `bg-${count}.${ext}`);
  fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
  console.log(`Extracted: public/equinox/bg-${count}.${ext}`);
  count++;
}
