const fs = require('fs-extra');

fs.mkdirSync('./dist/medias/glb', { recursive: true });


fs.copyFile('./src/medias/glb/Robot.glb', './dist/medias/glb/Robot.glb', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Robot.glb file copied successfully!');
  }
});
fs.copyFile('./src/medias/glb/EARTH3D.glb', './dist/medias/glb/EARTH3D.glb', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('EARTH3D.glb file copied successfully!');
  }
});
fs.copyFile('./src/medias/glb/light-scene.splinecode', './dist/medias/glb/light-scene.splinecode', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Spline model file copied successfully!');
  }
});
fs.copyFile('./src/medias/glb/ogimage.png', './dist/medias/glb/ogimage.png', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('OGimage png file copied successfully!');
  }
});