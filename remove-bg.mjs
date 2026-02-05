import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

const inputPath = './public/profile.png';
const outputPath = './public/profile-nobg.png';

console.log('Removing background from image...');

async function removeBg() {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const blob = new Blob([inputBuffer], { type: 'image/png' });

    const resultBlob = await removeBackground(blob, {
      progress: (key, current, total) => {
        console.log(`Processing: ${key} ${Math.round((current / total) * 100)}%`);
      }
    });

    const arrayBuffer = await resultBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);
    console.log(`Background removed! Saved to: ${outputPath}`);

    // Also update the main profile image
    fs.copyFileSync(outputPath, './public/profile.png');
    console.log('Updated profile.png with background-removed version');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

removeBg();
