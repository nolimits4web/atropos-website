import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const API_URL = 'https://sponsors.nolimits4web.com/api/sponsors/atropos';
const OUTPUT_PATH = path.resolve(__dirname, '../src/shared/sponsors.json');

(async () => {
  console.log('Fetching sponsors...');

  let sponsors = [];
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    sponsors = data.map((item) => ({
      createdAt: item.createdAt,
      title: item.title ?? '',
      link: item.link ?? '',
      plan: item.plan === 'Gold Sponsor' ? 'Gold Sponsor' : 'Sponsor',
      image: item.image ?? '',
    }));
    console.log(`Fetched ${sponsors.length} sponsors`);
  } catch (err) {
    console.warn(
      `Failed to fetch sponsors: ${err.message}. Using existing file if present.`
    );
    if (fs.existsSync(OUTPUT_PATH)) {
      return;
    }
    console.warn('No existing sponsors.json, writing empty array');
  }

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(sponsors, null, 2)}\n`);
})();
