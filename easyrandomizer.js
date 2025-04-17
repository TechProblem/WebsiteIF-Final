const glob = require('glob');
const path = require('path');

const folderPath = './EasyImages';

glob(`${folderPath}/*`, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log(files);
});
