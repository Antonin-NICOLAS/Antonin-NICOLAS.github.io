const fs = require('fs-extra');

fs.copy('./src/medias/glb', './dist/medias/glb', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Media files copied successfully!');
  }
});